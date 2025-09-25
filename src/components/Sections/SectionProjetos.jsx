import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './SectionProjetos.css'

function SectionProjetos() {
    const [projects, setProjects] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:4000/api/projects')
            .then(response => {
                setProjects(response.data)
            })
            .catch(error => {
                console.error("Erro ao buscar projetos:", error)
            })
    }, [])

    const removeProject = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/projects/${id}`)
            setProjects(projects.filter(project => project.id !== id))
        }
        catch (error) {
            console.error("Erro ao remover projeto:", error)
        }
    }

    const editProject = (project) => {
        navigate("/AddProject", { state: { project } })
    }

    return (
        <section id='projetos' className='projetos'>
            <h2 className='projetos-titulo'>Meus Projetos</h2>
            {projects.length === 0 ? (
                <div className='caixa-msg'>
                    <p className='msg-sem-projeto'>Nenhum projeto cadastrado.</p>
                </div>
            ) : (
                <div className='projetos-caixa'>
                    {projects.map((project, index) => (
                        <div key={index} className='projetos-card'>
                            <img
                                src={`http://localhost:4000${project.image}`}
                                alt={`Imagem do Projeto ${index + 1}`}
                                className='projetos-imagem'
                            />
                            <div className='projetos-caixa-texto'>
                                <h3 className='info-projetos'>{project.title}</h3>
                                <p className='paragrafo-projetos'>{project.description}</p>
                            </div>
                            <div className='btn-grupos'>
                                <button 
                                    className='btn-editar'
                                    onClick={() => editProject(project)}
                                >
                                    Editar Projeto
                                </button>
                                <button
                                    className='btn-remover'
                                    onClick={() => removeProject(project.id)}
                                >
                                    Remover Projeto
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }
        </section>
    )
}

export default SectionProjetos