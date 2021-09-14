import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgPolitica from '../../../imagens/politica.jpg'

import CapitalHeader from './CapitalHeader.js'

export default function Politica() {
    return (
        <>
            <CapitalHeader />
            <div className="politica">
                <Titulo text="Política" />
                <figure>
                    <img src={ImgPolitica} alt="Política" className="imagem" />
                </figure>
            </div>
        </>
    )
}