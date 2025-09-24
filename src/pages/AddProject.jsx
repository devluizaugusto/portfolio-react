import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './AddProject.css'

function AddProject() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const navigate = useNavigate()

    const [preview, setPreview] = useState('')
    const [fileName, setFileName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        if(image) {
            formData.append("image", image)
        }

        try {
            await axios.post("http://localhost:4000/api/projects", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            navigate("/")
        }
        catch (error) {
            console.error("Erro ao adicionar projeto:", error)
            alert("Erro ao salvar projeto.")
        }
    }

    useEffect(() => {
        if(message) {
            const timer = setTimeout(() => {
                setMessage("")
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [message])
    
    const handleImageChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            setImage(file)
            setFileName(file.name)
            setPreview(URL.createObjectURL(file))
            setMessage("")
        }
    }

    const handleRemove = () => {
        if (!fileName) {
            setMessage("Nenhuma imagem selecionada para remover.")
            return
        }

        setFileName('')
        setPreview(null)
        setMessage("Imagem removida com sucesso.")

        document.getElementById('fileInput').value = ""
    }

    return (
        <div className="form-projeto">
            <h2 className="form-projeto-titulo">Cadastro de Projeto</h2>
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="form-grupo">
                    <label htmlFor="">Título:</label>
                    <input 
                        type="text" 
                        className="form-campo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-grupo">
                    <label htmlFor="">Descrição:</label>
                    <textarea 
                        name="" 
                        id="" 
                        className="form-campo" 
                        rows={6}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className='form-arquivos'>
                    <input
                        type='file'
                        id='fileInput'
                        accept='image/*'
                        onChange={handleImageChange}
                    />
                    <label
                        htmlFor="fileInput"
                        className='custom-file-label'
                    >
                        Selecionar Imagem
                    </label>
                    {fileName && <p className='file-name'>{fileName}</p>}
                    {preview && <img src={preview} alt='Preview' className='file-preview' />}
                    {message && <p className='file-message'>{message}</p>}
                    <button type="submit" className="form-botao-salvar">Salvar</button>
                    <button type='button' className='form-botao-remover' onClick={handleRemove}>Remover Imagem</button>
                </div>
            </form>
        </div>
    )
}

export default AddProject