import React, { Component } from 'react';
import BancoDeDados from 'src/bd/BancoDeDados';
import { withRouter } from 'react-router-dom';


class DetalheProduto extends Component {
    voltar = () => {
        this.props.history.push('/produtos');

    }

    render() {
        let { id } = this.props.match.params;
        let produto = BancoDeDados.getProduto(id);

        return (
            <>
                <h3>{produto.nome}</h3>
                <h4>Preço: R$ {produto.preco}</h4>
                <p><button onClick={() => this.voltar()}>Voltar</button></p>
            </>
        );
    }
}

export default withRouter(DetalheProduto);