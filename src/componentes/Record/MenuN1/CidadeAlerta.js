import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgCidadeAlerta from '../../../imagens/cidadealerta.jpg'

import RecordHeader from '../MenuN1/RecordHeader.js'

export default function CidadeAlerta() {
    return (
        <>
            <RecordHeader />
            <div className="cidadealerta">
                <Titulo text="Cidade Alerta" />
                <figure>
                    <img src={ImgCidadeAlerta} alt="Cidade Alerta" className="imagem" />
                </figure>
            </div>
        </>
    )
}