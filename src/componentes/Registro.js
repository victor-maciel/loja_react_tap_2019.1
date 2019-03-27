import React, { Component } from 'react';
import Loja from './Loja';
import './Login.css';

class Registro extends Component {
    login = () => {
        this.props.history.push('/');
    }
    loja = () => {
        this.props.history.push('/Loja');
    }
    render() {
        return (
            <body>
                <form class="form-signin" component={Loja}>
                    <div class="text-center mb-4">
                        <img class="mb-4" src="https://avatars2.githubusercontent.com/u/1714691?s=200&v=4" alt="" width="72" height="72" />
                        <h1 class="h3 mb-3 font-weight-normal">Cursos Store</h1>
                        <p>Cadastro de usuario. </p>
                    </div>

                    <div class="form-label-group">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                        <label for="inputEmail"></label>
                    </div>

                    <div class="form-label-group">
                        <input type="text" id="inputNomeCompleto" class="form-control" placeholder="Nome Completo" required="" autofocus="" />
                        <label for="inputNomeCompleto"></label>
                    </div>

                    <div class="form-label-group">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                        <label for="inputPassword"></label>
                    </div>

                    <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => this.loja()} >Cadastrar</button>
                    <button class="btn btn-lg btn-danger btn-block" type="submit" onClick={() => this.login()} >Voltar</button>


                    <div class="alert alert-success" role="alert">
                        <h4 class="alert-heading">Well done!</h4>
                        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                        <hr />
                        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </div>

                </form>


            </body>
        );
    }
}

export default Registro;