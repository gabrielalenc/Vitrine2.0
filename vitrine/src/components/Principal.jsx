import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const Modelo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 32 0px;
    `;

const Produto = styled.div`
background-color: #fff;
padding: 8px;
margin-top: 5%;

`
const ProdutoImagem = styled.img`
    background-color: #f0f0f0;
    border-radius: 8px;
    width: 350px;
    margin-top: 10%;
 
`;

const ProdutoDados = styled.div`
    text-align: center;
`;

const ProdutoLink = styled.a`
    text-decoration: none; 
    color: #333; 
    font-weight: bold; 
    transition: color 0.3s, background-color 0.3s; 

    &:hover {
        background-color: #0e0e0e;  
    }
`;

function Principal(props) {
    return (
        <Modelo>
            {props.produtos.map(function (produto, indice) {
                return (
                    <Produto key={indice}>
                        <ProdutoLink href={"/produto/" + produto.codigo}>
                            <ProdutoImagem
                                src={produto.imagens[0]}
                                alt="Foto do Produto"
                            />
                            <ProdutoDados>
                                <div>{produto.modelo}</div>
                                <div>R$ {produto.preco},00</div>
                            </ProdutoDados>
                        </ProdutoLink>
                    </Produto>
                );
            })}
        </Modelo>
    );
}

export default Principal;
