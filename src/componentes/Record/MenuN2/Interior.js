import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgInterior from '../../../imagens/not-interior.jpg'

import BalancoGeralHeader from './BalancoGeralHeader.js'

export default function Interior() {
    return (
        <>
            <BalancoGeralHeader />
            <div className="interior">
                <Titulo text="Notícias do Interior" />
                <figure>
                    <img src={ImgInterior} alt="Notícias do Interior" className="imagem" />
                </figure>
            </div>
        </>
    )
}