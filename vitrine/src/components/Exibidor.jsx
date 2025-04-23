import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ProdutosExemplos from '../Data/ProdutosExemplos';
import SalvarCarrinho from '../functions/SalvarCarrinho';

const Modelo = styled.div `
    background-color: #fff;
    display: flex;
    margin: 32px 0;
    overflow: hidden;
`
const ModeloImagens = styled.div`
    display: flex;
    overflow-x: scroll;
    width: 450px;
    height: 450px;
`
const ModeloDados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    margin-top: 13%;
`
const BotaoCarrinho = styled.button`
    background-color: #0e0e0e; 
    color: #fff; 
    border: none; 
    border-radius: 4px; 
    padding: 10px 20px; 
    font-size: 16px; 
    font-weight: bold; 
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s; 

    &:hover {
        background-color: #0056b3; 
        transform: scale(1.05);
    }

    &:active {
        background-color: #003f7f; 
        transform: scale(0.95); 
    }
`;

function Exibidor(props) {
    return Object.keys(props.produto).length > 0 ? (
        <Modelo>
            <ModeloImagens>
                {props.produto.imagens && props.produto.imagens.map((imagem, index ) => (
                    <img key={index}
                    src={imagem}
                    alt='Foto do produto'
                    height={430}

                    />
                ))}
            </ModeloImagens>
            <ModeloDados>
                <div>{props.produto.marca}</div>
                <div>{props.produto.modelo}</div>
                <div>R$ {props.produto.preco},00</div>
                <div>{props.produto.descricao}</div>
                <BotaoCarrinho onClick={() => SalvarCarrinho(props.produto.codigo)}> Adicionar ao Carrinho</BotaoCarrinho>
            </ModeloDados>
        </Modelo>
    ) : (
        <Modelo>
        <div>Nenhum produto disponível</div> 
        </Modelo>
    );
}

export default Exibidor