import React, { useEffect, useState } from "react";
import Navegacao from "../components/Navegacao"
//import ProdutosExemplos from "../Data/ProdutosExemplos"
import Janela from "../components/Janela"
import ObterCarrinho from "../functions/ObterCarrinho";
import Pagamentos from "../functions/Pagamentos"
import styled from "styled-components";
import RemoverCarrinho from "../functions/RemoverCarrinho";
import { ObterProdutos } from "../functions/RequisaoServidor";

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

const ProdutoImagem = styled.img`
    background-color: #f0f0f0;
    border-radius: 8px;
    width: 350px;
    margin-top: 10%;
 
`;

const BotaoCarrinho2 = styled.button`
    background-color: #0e0e0e; 
    color: #fff; 
    border: none; 
    border-radius: 5px; 
    padding: 15px 25px; 
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

const CelulaBotao = styled.td`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 27%; 
    text-align: center;
    vertical-align: middle;
`;

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

const LinhaTabela = styled.tr`
    background-color: #f9f9f9; 
    border-bottom: 1px solid #ddd; 
    text-align: center; 
    &:hover {
        background-color: #e0e0e0;
    }
`;

const CelulaTabela = styled.td`
    padding: 12px; 
    font-size: 16px; 
    color: #333; 
    text-align: center; /* Centraliza horizontalmente */
    vertical-align: middle; 
`;

const ImagemProduto = styled(ProdutoImagem)`
    width: 100px; 
    height: auto; 
    border-radius: 8px; 
`;
function Carrinho() {

    const [carrinho, definirCarrinho] = useState([])
    const [preco, definirPreco] = useState(0)
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

    useEffect(function () {
        const resultado = ObterCarrinho()
        definirCarrinho(resultado)
    }, [produtos])

    useEffect(function () {
        var total = 0
        carrinho.map(function (codigo) {
            for (const produto of produtos)
                if (produto.codigo == codigo)
                    total += parseInt(produto.preco)
        })
        definirPreco(total)


    }, [produtos, carrinho])

    return (
        <>
            <Navegacao titulo="Vitrine">
                <LinkContainer>
                    <LinkEstilizado href="/">INICIO</LinkEstilizado>
                    <LinkEstilizado href="/promocao">PROMOCAO</LinkEstilizado>
                    <LinkEstilizado href="/carrinho">CARRINHO</LinkEstilizado>
                </LinkContainer>
            </Navegacao>
            <Janela>
                <table width="100%">
                    <tbody>
                        {
                           produtos.length > 0 && carrinho.map(function (codigo, indice) {
                                for (const produto of produtos) {
                                    if (produto.codigo == codigo)
                                        return <LinhaTabela key={indice}>
                                            <CelulaTabela>{produto.codigo}</CelulaTabela>
                                            <CelulaTabela>{produto.modelo}</CelulaTabela>
                                            <CelulaTabela>R$ {produto.preco},00</CelulaTabela>
                                            <CelulaTabela>
                                                <ImagemProduto
                                                    src={produto.imagens[0]}
                                                    alt="Foto do Produto"
                                                />
                                            </CelulaTabela>
                                            <CelulaBotao>
                                                <BotaoCarrinho2
                                                    onClick={() => {
                                                        RemoverCarrinho(produto.codigo); // Remove apenas uma ocorrência
                                                        definirCarrinho((prevCarrinho) =>
                                                            prevCarrinho.filter((item, index) => index !== prevCarrinho.indexOf(produto.codigo))
                                                        ); // Atualiza o estado local
                                                    }}
                                                >
                                                    Excluir
                                                </BotaoCarrinho2>
                                            </CelulaBotao>
                                        </LinhaTabela>
                                }
                            })
                        }


                    </tbody>

                </table>
                <h1> Total R$ {preco},00</h1>
                <BotaoCarrinho onClick={Pagamentos}> Pagamento por pix </BotaoCarrinho>
            </Janela>
        </>
    )
}

export default Carrinho