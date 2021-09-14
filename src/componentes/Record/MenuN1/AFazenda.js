import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgAFazenda from '../../../imagens/afazenda.jpg'

import RecordHeader from '../MenuN1/RecordHeader.js'

export default function AFazenda() {
    return (
        <>
            <RecordHeader />
            <div className="afazenda">
                <Titulo text="A Fazenda" />
                <figure>
                    <img src={ImgAFazenda} alt="A Fazenda" className="imagem" />
                </figure>
            </div>
        </>
    )
}