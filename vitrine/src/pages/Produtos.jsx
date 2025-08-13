import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Navegacao from '../components/Navegacao'
import Exibidor from '../components/Exibidor';
//import ProdutosExemplos from '../Data/ProdutosExemplos'
import { useEffect, UseState } from 'react';
import { useParams } from 'react-router-dom';
import { ObterProdutoCodigo } from '../functions/RequisaoServidor';

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
    const [produto, definirProduto] = useState({})

    useEffect(function () {
        ObterProdutoCodigo(codigo)
            .then(function (resposta) {
                if (resposta.status === 200)
                    definirProduto(resposta.data)
            })
            .catch(function (erro) {
                console.error(erro)
            })
    }, [])    

        return (
            <>
                <Navegacao>
                    <LinkContainer>
                        <LinkEstilizado href="/">INICIO</LinkEstilizado>
                        <LinkEstilizado href="/promocao">PROMOCAO</LinkEstilizado>
                        <LinkEstilizado href="/carrinho">CARRINHO</LinkEstilizado>
                    </LinkContainer>
                </Navegacao>
                <Exibidor produto={produto}/>
            </>
        );
    }

export default Produtos