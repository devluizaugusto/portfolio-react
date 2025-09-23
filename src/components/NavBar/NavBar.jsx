import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import './NavBar.css'

function NavBar() {
    return (
        <nav className='navegacao'>
            <ul className='menu'>
                <div className='menu-centro'>
                    <li>
                        <HashLink smooth to="/#inicio" className="menu-link">Início</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#sobre" className="menu-link">Sobre</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#projetos" className="menu-link">Projetos</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#contato" className="menu-link">Contato</HashLink>
                    </li>
                </div>

                <li className='novo-projeto'>
                    <Link to='/AddProject' className='btn-novo'>
                        + Adicionar Projeto
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar