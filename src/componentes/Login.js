import React, { Component } from 'react';
import Loja from './Loja';
import './Login.css';

class Login extends Component {
    loja = () => {
        this.props.history.push('/Loja');
    }
    registra = () => {
        this.props.history.push('/registro');
    }
    render() {
        return (
            <body>
                <form class="form-signin" component={Loja}>
                    <div class="text-center mb-4">
                        <img class="mb-4" src="https://avatars2.githubusercontent.com/u/1714691?s=200&v=4" alt="" width="72" height="72" />
                        <h1 class="h3 mb-3 font-weight-normal">Cursos Store</h1>
                        <p>A melhor loja de cursos do Brasil. </p>
                    </div>

                    <div class="form-label-group">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                        <label for="inputEmail">Email address</label>
                    </div>

                    <div class="form-label-group">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                        <label for="inputPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="Lembrar-me" /> Lembrar-me
                        </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => this.loja()} >Entrar</button>
                    <p class="txt-center ls-login-signup">Não possui um usuário na Cursos Store?
    		            <a href="" onClick={() => this.registra()}> Cadastre-se agora</a>
                    </p>
                    <p class="mt-5 mb-3 text-muted text-center">© 2019</p>
                </form>


            </body>

        );
    }

}


export default Login;