import React from 'react'
import { Link } from 'react-router-dom'

import '../../Header/Header.css'

export default function RecordHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">Voltar</Link></li>
                    <li><Link to="/record/falabrasil">Fala Brasil</Link></li>
                    <li><Link to="/record/balancogeral">Balanço Geral</Link></li>
                    <li><Link to="/record/cidadealerta">Cidade Alerta</Link></li>
                    <li><Link to="/record/afazenda">A Fazenda</Link></li>
                    <li><Link to="/record/raulgil">Raul Gil</Link></li>
                </ul>
            </nav>
        </header>
    )
}