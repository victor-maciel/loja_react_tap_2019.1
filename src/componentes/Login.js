import React, { Component } from 'react';
import Loja from './Loja';


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
                <form component={Loja}>

                    <div>

                        <h2>Login</h2>
                        <hr />

                        <label>Nome: </label>
                        <input type="text" />
                        <br />

                        <label>Senha: </label>
                        <input type="password" />
                        <br />

                        <button type="submit" onClick={() => this.loja()}>Login</button>
                        <button type="submit" onClick={() => this.registra()}>Cadastrar</button>

                        <hr />
                    </div>
                    <div class="container">
                        <span class="psw"><a href="#">Esqueceu a senha?</a></span>
                    </div>
                </form>
            </body>
        );
    }

}


export default Login;