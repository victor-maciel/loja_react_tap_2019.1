import React, { Component } from 'react';
import { LojaProvider } from '../context/LojaContext';
import BarraDeBusca from './BarraDeBusca';
import ListaDeProdutos from './ListaDeProdutos';
import CarrinhoDeCompras from './CarrinhoDeCompras';
import Principal from './Principal';
import DetalheProduto from './DetalheProduto';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class Loja extends Component {
  render() {
    return (
   
      <LojaProvider>
        <BrowserRouter>
         <Switch>
           <Route path="/" exact component={Principal} />
           <Route path="/produtos" exact component={ListaDeProdutos} />
           <Route path="/produtos/:id" exact component={DetalheProduto} />
           <Route component={PaginaNaoEncontrada} />
         </Switch>
       </BrowserRouter>
        <BarraDeBusca />
        <ListaDeProdutos />
        <CarrinhoDeCompras />
      </LojaProvider>
      
    );
  }
}

export default Loja;