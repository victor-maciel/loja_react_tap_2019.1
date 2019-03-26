import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Loja nome="Cursos Store"/>, document.getElementById('root'));
ReactDOM.render(<App nome="Cursos Store"/>, document.getElementById('root'));
// Se for user serviceworker, troca por .register
serviceWorker.unregister();