import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgPolicia from '../../../imagens/policia.jpg'

import CapitalHeader from './CapitalHeader.js'

export default function Policia() {
    return (
        <>
            <CapitalHeader />
            <div className="policia">
                <Titulo text="Polícia" />
                <figure>
                    <img src={ImgPolicia} alt="Polícia" className="imagem" />
                </figure>
            </div>
        </>
    )
}