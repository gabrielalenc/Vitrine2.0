function RemoverCarrinho(codigo) {
    // Recupera o carrinho do localStorage
    const resultado = localStorage.getItem("carrinho");
    const lista = JSON.parse(resultado || "[]");

    // Encontra o índice da primeira ocorrência do código
    const index = lista.findIndex((item) => item == codigo); // Compara sem considerar o tipo

    // Remove apenas a primeira ocorrência, se encontrada
    if (index !== -1) {
        lista.splice(index, 1); // Remove 1 item no índice encontrado
    }

    // Atualiza o localStorage com a nova lista
    localStorage.setItem("carrinho", JSON.stringify(lista));

    console.log(`Produto com código ${codigo} removido do carrinho.`);
}

export default RemoverCarrinho;