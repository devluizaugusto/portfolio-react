import './Main.css'
import fotoPerfil from '../../assets/foto-perfil.jpeg'

function Main() {
    return (
        <main id='inicio' className='cabecalho'>
            {fotoPerfil ? (
                <img src={fotoPerfil} alt='Foto do Perfil' className='foto-perfil'></img>
            ) : (
                <p className='msg-sem-foto'>Insira a foto do Perfil</p>
            )}
            <h1>Luiz Augusto de Andrade Silva</h1>
            <p className='cabecalho-subtitulo'>Desenvolvedor FullStack</p>
        </main>
    )
}

export default Main