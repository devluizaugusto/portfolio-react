import './SectionProjetos.css'
import imagemProjeto1 from '../../assets/projeto1.png'
import imagemProjeto2 from '../../assets/projeto3.png'
import imagemProjeto3 from '../../assets/Apple-produtos.webp'

function SectionProjetos() {
    return (
        <section id='projetos' className='projetos'>
            <h2 className='projetos-titulo'>Meus Projetos</h2>
            <div className='projetos-caixa'>
                <div className='projetos-card'>
                    <img src={imagemProjeto1} alt="Imagem Projeto 1" className='projetos-imagem' />
                    <div className='projetos-caixa-texto'>
                        <h3 className='info-projetos'>Loja de Carros</h3>
                        <p className="paragrafo-projetos">Loja virtual moderna com animações suaves e design responsivo para uma
                            loja de carros de luxo.</p>
                    </div>
                </div>

                <div className='projetos-card'>
                    <img src={imagemProjeto2} alt="Imagem Projeto 2" className='projetos-imagem' />
                    <div className='projetos-caixa-texto'>
                        <h3 className='info-projetos'>Página de Viagens</h3>
                        <p className="paragrafo-projetos">Uma página interativa com roteiros de viagem mais cobiçadas do mundo.
                        </p>
                    </div>
                </div>

                <div className='projetos-card'>
                    <img src={imagemProjeto3} alt="Imagem Projeto 3" className='projetos-imagem' />
                    <div className='projetos-caixa-texto'>
                        <h3 className='info-projetos'>Apple</h3>
                        <p className="paragrafo-projetos">Página da Apple criada para demonstrar conhecimentos em diversas
                            tecnologias.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SectionProjetos