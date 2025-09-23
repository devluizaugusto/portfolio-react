import './SectionContato.css'
import { useState } from 'react'

function SectionContato () {

    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")

    const enviarWhatsapp = (event) => {
        event.preventDefault()

        const telefone = "5581981529902"
        const texto = `Olá! Me chamo ${nome}, ${mensagem}`
        const msgFormatada = encodeURIComponent(texto)

        const url = `https://wa.me/${telefone}?text=${msgFormatada}`
        window.open(url, "_blank")
    }

    return (
        <section id='contato' className='contato'>
            <h2 className='contato-titulo'>Entre em Contato</h2>
            <form className='contato-formulario' onSubmit={enviarWhatsapp}>
                <div className='formulario-grupo'>
                    <input 
                        type="text" 
                        placeholder='Nome' 
                        className='formulario-campo' 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required     
                    />
                </div>
                <div className='formulario-grupo'>
                    <textarea   
                        placeholder='Digite sua mensagem' 
                        rows={6} 
                        className='formulario-campo'
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        required
                    > 
                    </textarea>
                </div>
                <button type='submit' className='formulario-botao'>Enviar Whatsapp</button>
            </form>
        </section>
    )
}

export default SectionContato