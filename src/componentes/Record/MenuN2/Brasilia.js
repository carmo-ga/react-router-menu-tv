import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgBrasilia from '../../../imagens/not-df.jpg'

import BalancoGeralHeader from './BalancoGeralHeader.js'

export default function Brasilia() {
    return (
        <>
            <BalancoGeralHeader />
            <div className="brasilia">
                <Titulo text="Notícias de Brasília" />
                <figure>
                    <img src={ImgBrasilia} alt="Notícias de Brasília" className="imagem" />
                </figure>
            </div>
        </>
    )
}