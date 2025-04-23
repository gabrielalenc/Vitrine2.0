import express from "express";
import { produto } from "./database/Produto.js";


const rotas = express.Router()

rotas.get("/produtos", async (requisisao, resposta) => {
    try {
        const resultados = await produto.find()
        if (resultados.lenght > 0)
            resposta.status(200).json(resultados)
        else
            resposta.sendStatus(404)
    }
    catch (erro) {
        console.log(erro.message)
        resposta.sendStatus(500)
    }
});

rotas.get("/produto/:codigo", async (requisisao, resposta) => {
    const { codigo } = requisisao.params
    try {
        const resultados = await produto.findOne({ codigo: codigo })
        if (resultados.lenght > 0)
            resposta.status(200).json(resultados)
        else
            resposta.sendStatus(404)
    }
    catch (erro) {
        console.log(erro.message)
        resposta.sendStatus(500)
    }

})
rotas.get("/promocao", async (requisisao, resposta) => {
    try {
        const resultados = await produto.find({ promocao: true })
        if (resultados.lenght > 0)
            resposta.status(200).json(resultados)
        else
            resposta.sendStatus(404)
    }
    catch (erro) {
        console.log(erro.message)
        resposta.sendStatus(500)
    }
})
rotas.post("/catalogar", async (requisisao, resposta) => {
    try {
        const novoProduto = new produto({
            codigo: requisisao.body.codigo,
            marca: requisisao.body.marca,
            modelo: requisisao.body.modelo,
            preco: parseInt(requisisao.body.preco),
            descricao: requisisao.body.descricao,
            imagens: requisisao.body.imagens,
            promocao: requisisao.body.promocao
        })
        const resultado = await novoProduto.save()
        resposta.status(201).json(resultado)
    }
    catch (erro) {
        console.log(erro.message)
        resposta.sendStatus(500)
    }
});

//rotas.get("*", function (requisisao, resposta) {
//    resposta.sendStatus(404)
//})



export default rotas