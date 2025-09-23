import { useState, useEffect } from 'react'

import './AddProject.css'

function AddProject() {

    const [preview, setPreview] = useState('')
    const [fileName, setFileName] = useState('')
    const [message, setMessage] = useState('')

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
            <form className="formulario" action="">
                <div className="form-grupo">
                    <label htmlFor="">Título:</label>
                    <input type="text" className="form-campo" />
                </div>
                <div className="form-grupo">
                    <label htmlFor="">Descrição:</label>
                    <textarea name="" id="" className="form-campo" rows={6}></textarea>
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