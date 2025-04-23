import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Navegacao from '../components/Navegacao'
import Exibidor from '../components/Exibidor';
import ProdutosExemplos from '../Data/ProdutosExemplos'

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

function Produtos() {
    const { codigo } = useParams()
    return (
        <>
            <Navegacao>
                <LinkContainer>
                    <LinkEstilizado href="/">INICIO</LinkEstilizado>
                    <LinkEstilizado href="/promocao">PROMOCAO</LinkEstilizado>
                    <LinkEstilizado href="/carrinho">CARRINHO</LinkEstilizado>
                </LinkContainer>
            </Navegacao>
            <Exibidor produto={ProdutosExemplos.find((produto) => produto.codigo == codigo)} />
        </>
    );
}

export default Produtos