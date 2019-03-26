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

                    <div id="divCenter"> 

                        <div class="box-parent-login">
                            <div class="well bg-white box-login">
                                <h1 class="ls-login-logo">Cursos Store  - Login</h1>
                                
                                    <fieldset>

                                        <div class="form-group ls-login-user">
                                            <label for="userLogin"> Usuário</label>
                                            <input class="form-control ls-login-bg-user input-lg" id="userLogin" type="text" aria-label=" Usuário" placeholder=" Digite o usuário aqui" />
                                        </div>
                                        <div class="form-group ls-login-password">
                                            <label for="userPassword"> Senha</label>
                                            <input class="form-control ls-login-bg-password input-lg" id="userPassword" type="password" aria-label=" Senha" placeholder="Digite sua senha aqui" />
                                        </div>

                                        <input type="submit" value="Entrar" class="btn btn-primary btn-lg btn-block" onClick={() => this.loja()} />
                                        <p class="txt-center ls-login-signup">Não possui um usuário na Cursos Store?
    					                    <a href="" onClick={() => this.registra()}> Cadastre-se agora</a>
                                        </p>
                                        <p class="txt-center ls-login-signup">Não lembra da senha no Cursos Store?
                                            <span class="psw"><a href="#"> Esqueceu a senha?</a></span>
                                        </p>
                                    </fieldset>
                              
                            </div>
                        </div>
                        <hr />
                    </div>

                </form>
            </body>
        );
    }

}


export default Login;