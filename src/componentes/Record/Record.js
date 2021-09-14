import React from 'react'
import './Record.css'
import Titulo from '../Titulo/Titulo.js'
import ImgRecord from '../../imagens/record.jpg'

import RecordHeader from './MenuN1/RecordHeader.js'


export default function Record() {
    return (
        <div className="record">
            <RecordHeader />
            <Titulo text="Record" />
            <figure>
                <img src={ImgRecord} alt="TV Record" className="imagem" />
            </figure>
        </div>
    )
}