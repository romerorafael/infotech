import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/LogoInfoTech.png'
import Button from '../Button'

import './Menu.css'

function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo da InfoTech"/>
            </Link>

            <Button as={Link} className="Buttonlink" to="/cadastro/video">
                Novo Video
            </Button>
            
        </nav>
    )
}

export default Menu
