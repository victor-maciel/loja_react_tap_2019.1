import React, { Component } from 'react';
///import ListaDeProdutos from './ListaDeProdutos';
import DetalheProduto from './DetalheProduto';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
///import Principal from './Principal';
import Registro from './Registro';
import Login from './Login';
import Loja from './Loja';


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/produto/:id" exact component={DetalheProduto} />
            <Route path="/loja" exact component={Loja} />
            <Route path="/login" exact component={Login} />
            <Route path="/registro" exact component={Registro} /> 
            <Route component={PaginaNaoEncontrada} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;