import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgCulinaria from '../../../imagens/not-culinaria.jpg'

import BalancoGeralHeader from './BalancoGeralHeader.js'

export default function Culinaria() {
    return (
        <>
            <BalancoGeralHeader />
            <div className="culinaria">
                <Titulo text="Notícias de Culinária" />
                <figure>
                    <img src={ImgCulinaria} alt="Notícias de Culinária" className="imagem" />
                </figure>
            </div>
        </>
    )
}