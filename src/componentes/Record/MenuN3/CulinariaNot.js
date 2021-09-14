import React from 'react'
import '../Record.css'
import Titulo from '../../Titulo/Titulo.js'
import ImgCulinariaNot from '../../../imagens/culinarianot.jpg'

import CapitalHeader from './CapitalHeader.js'

export default function CulinariaNot() {
    return (
        <>
            <CapitalHeader />
            <div className="culinarianot">
                <Titulo text="Culinária" />
                <figure>
                    <img src={ImgCulinariaNot} alt="Culinária" className="imagem" />
                </figure>
            </div>
        </>
    )
}