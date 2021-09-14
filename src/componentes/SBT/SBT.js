import React from 'react'
import './SBT.css'
import Titulo from '../Titulo/Titulo.js'
import ImgSbt from '../../imagens/sbt.jpg'

export default function Sbt() {
    return (
        <div className="sbt">
            <Titulo text="Sbt" />
            <figure>
                <img src={ImgSbt} alt="SBT" className="imagem" />
            </figure>
        </div>
    )
}