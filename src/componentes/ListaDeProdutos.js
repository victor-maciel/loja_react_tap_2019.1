import React, { Component } from 'react';
import BancoDeDados from './bd/BancoDeDados';
import { Link } from 'react-router-dom';

class ListaDeProdutos extends Component {
  renderProduto(p) {
    return (
      <li>
        <Link to={'/produtos/' + p.id}>
          {p.nome} - R${p.preco.toFixed(2)}
          </Link>
      </li> 
    );
  }
  
  render() {
    return (
      <>
        <h3>Lista de Produtos</h3>
        <ul>
          {BancoDeDados.getProdutos().map(this.renderProduto)}
        </ul>
      </>
    );
  }
}


export default ListaDeProdutos;