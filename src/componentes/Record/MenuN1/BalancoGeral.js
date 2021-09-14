import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgBalancoGeral from '../../../imagens/balancogeral.jpg'

import BalancoGeralHeader from '../MenuN2/BalancoGeralHeader.js'

export default function BalancoGeral() {
    return (
        <>
            <BalancoGeralHeader />
            <div className="balancogeral">
                <Titulo text="Balanço Geral" />
                <figure>
                    <img src={ImgBalancoGeral} alt="Balanço Geral" className="imagem" />
                </figure>
            </div>
        </>
    )
}