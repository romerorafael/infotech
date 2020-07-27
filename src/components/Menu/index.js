import React from 'react'
import Logo from '../../assets/img/LogoInfoTech.png'
import Button from '../Button'

import './Menu.css'

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da InfoTech"/>
            </a>

            <Button as="a" className="Buttonlink" href="/">
                Novo Video
            </Button>
            
        </nav>
    )
}

export default Menu
