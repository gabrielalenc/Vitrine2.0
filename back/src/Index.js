import express from "express"
import cors from "cors"
import Rotas from "./Rotas.js"
import "./database/Conexao.js"

const servidor = express()
servidor.use(cors())
servidor.use(Rotas)
servidor.use(express.json())

servidor.listen(4000, function() {
    console.log("Servidor em Funcionamento!")
    console.log("http://localhost:4000/")
})