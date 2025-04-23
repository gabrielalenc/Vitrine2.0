import React from 'react';
import { useState } from 'react';
import Navegacao from '../components/Navegacao'
import Exibidor from '../components/Exibidor'
import ProdutosExemplo from '../Data/ProdutosExemplos'
import styled from 'styled-components';

const PaginaPromocao = styled.div`
    padding: 16px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const ListaProdutos = styled.div`
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap;
    gap: 50px; 
    justify-content: center; 
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

function Promocao() {
    return (
        <PaginaPromocao>
            <Navegacao titulo="VITRINE">
                <LinkContainer>
                    <LinkEstilizado href="/">INICIO</LinkEstilizado>
                    <LinkEstilizado href="/promocao">PROMOCAO</LinkEstilizado>
                    <LinkEstilizado href="/carrinho">CARRINHO</LinkEstilizado>
                </LinkContainer>

            </Navegacao>
            <ListaProdutos>
                {ProdutosExemplo.map((produto, indice) => {
                    if (produto.promocao) {
                        return (
                            <Exibidor
                                key={indice}
                                produto={produto}
                            />
                        );
                    }
                    return null;
                })}
            </ListaProdutos>
        </PaginaPromocao>
    );
}

export default Promocao