import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import graduation from '../../assets/graduation.svg';

function Login() {
  return (
    <Container>
      <Content>
        <img src={graduation} alt="" />
        <div id="inputsFields">
          <h2>SIGHC</h2>
          <form action="/dashboard">
            <input type="text" placeholder="Matricula" />
            <input type="password" placeholder="Senha" />
            <Link to="/dashboard">Entrar</Link>
          </form>
          <div id="registerArea">
            <p>
              Não possue uma conta? <a href="/dashboard">Cadastre-se</a>
            </p>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Login;
