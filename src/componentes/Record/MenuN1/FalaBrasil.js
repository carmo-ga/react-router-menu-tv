import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgFalaBrasil from '../../../imagens/falabrasil.jpg'

import RecordHeader from '../MenuN1/RecordHeader.js'

export default function FalaBrasil() {
    return (
        <>
            <RecordHeader />
            <div className="falabrasil">
                <Titulo text="Fala Brasil" />
                <figure>
                    <img src={ImgFalaBrasil} alt="Fala Brasil" className="imagem" />
                </figure>
            </div>
        </>
    )
}