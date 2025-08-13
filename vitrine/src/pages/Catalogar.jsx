import React, { useEffect, useState } from 'react';
import Formulario from '../components/Formulario';
import ProdutoInicial from '../Data/ProdutoInicial';
import { CatalogarProduto } from '../functions/RequisaoServidor';

export default function Catalogar() {
    const [produto, definirProduto] = useState(ProdutoInicial)

    function MudarTexto(evento) {
        const valor = evento.target.value
        const campo = evento.target.name
        definirProduto({ ...produto, [campo]: valor })
    }

    function MudarPromo(evento) {
        const valor = evento.target.checked
        definirProduto({ ...produto, "promocao": valor })
    }

    function Mudarimagem(evento) {
        const indice = evento.target.id
        const imagens = produto.imagens
        imagens[indice] = evento.target.value
        definirProduto({ ...produto, "imagens": imagens })
    }

    function Catalogar(evento) {
        evento.preventDefault()
        CatalogarProduto(produto)
        definirProduto(ProdutoInicial)
    }

    return <Formulario onSubmit={Catalogar}>
        <input type="text" name='codigo'
            value={produto.codigo}
            onChange={MudarTexto}
            placeholder='Código do Produto' required
        />

        <input type="text" name='marca'
            value={produto.marca}
            onChange={MudarTexto}
            placeholder='Marca do Produto' required
        />

        <input type="text" name='modelo'
            value={produto.modelo}
            onChange={MudarTexto}
            placeholder='Modelo do Produto' required />

        <input type="text" name='preco'
            value={produto.preco}
            onChange={MudarTexto}
            placeholder='Preço do Produto' required
        />

        <input type="text" name='descricao'
            onChange={MudarTexto}
            value={produto.descricao}
            placeholder='Descrição do Produto' required
        />

        <input type="url" name='imagens' id='0'
            onChange={Mudarimagem}
            value={produto.imagens[0]}
            placeholder='URL da Imagem 0' required
        />

        <input type="url" name='imagens' id='1'
            onChange={Mudarimagem}
            value={produto.imagens[1]}
            placeholder='URL da Imagem 1' required
        />

        <input type="url" name='imagens' id='2'
            onChange={Mudarimagem}
            value={produto.imagens[2]}
            placeholder='URL da Imagem 2' required
        />

        <div>
            <label htmlFor="promocao"> Promoção? </label>
            <input type="checkbox" name='promocao'
                id='promocao'
                onChange={MudarPromo}
                checked={produto.promocao}
            />
        </div>
        <input type="submit" value="Catalogar" />
    </Formulario>
}