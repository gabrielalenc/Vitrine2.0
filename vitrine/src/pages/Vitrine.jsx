import React from 'react';
import { useState } from 'react';
import Principal from '../components/Principal';
import styled from 'styled-components';
import ProdutosExemplos from '../Data/ProdutosExemplos';
import Navegacao from '../components/Navegacao';
import { createGlobalStyle } from 'styled-components';

const PaginaVitrine = styled.div`
    padding: 16px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f5f5f5;
  }

 
  `;

const LinkEstilizado = styled.a`
    text-decoration: none;
    color: #333;
    font-size: 18px;
    font-family: sans-serif;
    padding: 8px 16px; 
    border-radius: 4px; 
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #0e0e0e; 
        color: #fff; 
        border: 5px;
    }
`;

const LinkContainer = styled.div`
    display: flex;
    gap: 16px; 
    justify-content: center; 
    margin-top: 16px; 
`;


function Vitrine() {
    return (
        <>
            <GlobalStyle />
            <PaginaVitrine>
                <Navegacao titulo="VITRINE">
                <LinkContainer>
                        <LinkEstilizado href="/">INICIO</LinkEstilizado>
                        <LinkEstilizado href="/promocao">PROMOCAO</LinkEstilizado>
                        <LinkEstilizado href="/carrinho">CARRINHO</LinkEstilizado>
                    </LinkContainer>
                </Navegacao>
                <Principal produtos={ProdutosExemplos} />
            </PaginaVitrine>
        </>
    );
}

export default Vitrine