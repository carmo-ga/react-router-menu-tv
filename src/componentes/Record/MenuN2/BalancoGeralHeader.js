import React from 'react'
import { Link } from 'react-router-dom'

import '../../Header/Header.css'

export default function BalancoGeralHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/record">Voltar</Link></li>
                    <li><Link to="/record/balancogeral/capital">Notícias da Capital</Link></li>
                    <li><Link to="/record/balancogeral/interior">Notícias do Interior</Link></li>
                    <li><Link to="/record/balancogeral/brasilia">Notícias de Brasília</Link></li>
                    <li><Link to="/record/balancogeral/culinaria">Notícias de Culinária</Link></li>
                </ul>
            </nav>
        </header>
    )
}