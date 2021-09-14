import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgRaulGil from '../../../imagens/raulgil.jpg'

import RecordHeader from '../MenuN1/RecordHeader.js'

export default function RaulGil() {
    return (
        <>
            <RecordHeader />
            <div className="raulgil">
                <Titulo text="Raul Gil" />
                <figure>
                    <img src={ImgRaulGil} alt="Raul Gil" className="imagem" />
                </figure>
            </div>
        </>
    )
}