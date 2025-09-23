import './Main.css'
import fotoPerfil from '../../assets/foto-perfil.jpeg'

function Main () {
    return (
        <main id='inicio' className='cabecalho'>    
            <img src={fotoPerfil} alt="Foto do perfil" className='foto-perfil'/>
            <h1>Luiz Augusto de Andrade Silva</h1>
            <p className="cabecalho-subtitulo">Desenvolvedor Fullstack</p>
        </main>
    )
}

export default Main