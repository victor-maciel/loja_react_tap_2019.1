const PRODUTOS = [
    {id: '01', nome: 'Advanced JavaScript Concepts', preco: 23.99},
    {id: '02', nome: 'JavaScript - DOMinator project apply JavaScript learn DOM ', preco: 23.99},
    {id: '03', nome: 'Build a Realtime App with React Hooks and GraphQL', preco: 23.99},
    {id: '04', nome: 'Learn and Understand Angular and NodeJS- A Developers Course ', preco: 23.99},

];

class BancoDeDados {
    static getProdutos() {
        return PRODUTOS;
    }
    static getProduto(id){
        return PRODUTOS.filter((p) => p.id === id)[0];
    }
}

export default BancoDeDados;