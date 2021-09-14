import React from 'react'
import { Link } from 'react-router-dom'

import '../../Header/Header.css'

export default function CapitalHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/record/balancogeral">Voltar</Link></li>
                    <li><Link to="/record/balancogeral/capital/politica">Política</Link></li>
                    <li><Link to="/record/balancogeral/capital/educacao">Educação</Link></li>
                    <li><Link to="/record/balancogeral/capital/policia">Polícia</Link></li>
                    <li><Link to="/record/balancogeral/capital/culinarianot">Culinária</Link></li>
                    <li><Link to="/record/balancogeral/capital/esportes">Esportes</Link></li>
                </ul>
            </nav>
        </header>
    )
}