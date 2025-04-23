import React from "react";

function SalvarCarrinho(codigo) {
 

    const resultado = localStorage.getItem("carrinho")
    const lista = JSON.parse(resultado ||  "[]")
    lista.push(codigo)
    const carrinho = JSON.stringify(lista)
    localStorage.setItem("carrinho", carrinho)
    
}

export default SalvarCarrinho