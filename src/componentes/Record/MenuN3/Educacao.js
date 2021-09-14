import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgEducacao from '../../../imagens/educacao.png'

import CapitalHeader from './CapitalHeader.js'

export default function Educacao() {
    return (
        <>
            <CapitalHeader />
            <div className="educacao">
                <Titulo text="Educação" />
                <figure>
                    <img src={ImgEducacao} alt="Educação" className="imagem" />
                </figure>
            </div>
        </>
    )
}