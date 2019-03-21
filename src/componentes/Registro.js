import React, { Component } from 'react';

class Registro extends Component {
    login = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <>
                <div>

                    <h2>Cadastro</h2>
                    <hr />

                    <label>Nome: </label>
                    <input type="text" />

                    <label>sobrenome: </label>
                    <input type="text" />


                    <label>Senha: </label>
                    <input type="password" />
                    <br />

                    <button type="submit" onClick={() => this.login()}>Confirmar</button>

                    <hr />
                </div>

            </>
        );
    }

}

export default Registro;