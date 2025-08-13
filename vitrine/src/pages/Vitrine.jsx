import React from 'react';
import { useState } from 'react';
import Principal from '../components/Principal';
import styled from 'styled-components';
//import ProdutosExemplos from '../Data/ProdutosExemplos';
import Navegacao from '../components/Navegacao';
import { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';
import { ObterProdutos } from '../functions/RequisaoServidor';


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
    const [produtos, definirProdutos] = useState([])

    useEffect(function () {
        ObterProdutos()
            .then(function (resposta) {
                if (resposta.status === 200)
                definirProdutos(resposta.data)
            })
            .catch(function (erro) {
                console.error(erro)
            })

    }, [])
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
                {produtos.length > 0 &&
                    <Principal produtos={produtos} />
                }
            </PaginaVitrine>
        </>
    );
}

export default Vitrine