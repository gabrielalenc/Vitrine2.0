import { useState } from 'react'
import Vitrine from '../pages/Vitrine'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

const Modelo = styled.div`
    overflow: hidden;
    
`
const ModeloTitulo = styled.div`
    font-size: 32pt;
    padding: 32px 0;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
` 
const ModeloBotoes = styled.div`
    position: absolute;
    top: 12%;
    left: 40%;
    gap: 32px;
    justify-content: center;
 
`

function Navegacao(props) {


  return  (
    <Modelo>
      <ModeloTitulo> {props.titulo} </ModeloTitulo>
      <ModeloBotoes> {props.children}  </ModeloBotoes>
    </Modelo>
  )
}

export default  Navegacao
