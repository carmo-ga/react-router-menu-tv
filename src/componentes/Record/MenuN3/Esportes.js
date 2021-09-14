import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgEsportes from '../../../imagens/esportes.jpg'

import CapitalHeader from './CapitalHeader.js'

export default function Esportes() {
    return (
        <>
            <CapitalHeader />
            <div className="esportes">
                <Titulo text="Esportes" />
                <figure>
                    <img src={ImgEsportes} alt="Esportes" className="imagem" />
                </figure>
            </div>
        </>
    )
}