import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgCapital from '../../../imagens/not-capital.jpg'

import CapitalHeader from '../MenuN3/CapitalHeader'

export default function Capital() {
    return (
        <>
            <CapitalHeader />
            <div className="capital">
                <Titulo text="Notícias da Capital" />
                <figure>
                    <img src={ImgCapital} alt="Notícias da Capital" className="imagem" />
                </figure>
            </div>
        </>
    )
}