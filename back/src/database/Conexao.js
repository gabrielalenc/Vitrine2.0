import moongose  from "mongoose"
import "dotenv/config"
import mongoose from "mongoose"

const endereco = process.env.MONGO_URI

mongoose.connect(endereco)
.then(() => {
    console.log("CONECTADO COM O BANCO DE DADOS!");
})
.catch((error) => {
    console.log("Erro ao Conectar ao banco de dados: ", error);
});