import React from 'react'
import './Cultura.css'
import Titulo from '../Titulo/Titulo.js'
import ImgCultura from '../../imagens/cultura.jpg'

export default function Cultura() {
    return (
        <div className="cultura">
            <Titulo text="Cultura" />
            <figure>
                <img src={ImgCultura} alt="TV Cultura" className="imagem" />
            </figure>
        </div>
    )
}