import { Form } from 'react-bootstrap';
import axios from "axios";
import '../login.css';
import imagem from "./../image/game.svg"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function Login(){
    const navigate = useNavigate();
    const [login,setLogin] = useState('');
    const [senha,setSenha] = useState('');

    function handleLogin(event){
        if(login && senha){
            event.preventDefault();
            axios.post('http://localhost:3000/login',{login: login, senha: senha},{withCredentials: true}).then(resposta => {
                if(resposta.data.token){
                    localStorage.setItem("token",resposta.data.token);
                    localStorage.setItem("user", resposta.data.user);
                    window.location.reload();
                }else{
                    alert(resposta.data.message);
                }
            })
        }
    }


    return (
        <div className="Countainer">
            <div className="topBar">
                <h1><span>G</span>ame<span>Z</span>ada</h1>
            </div>
            <div id='body'>
                <div id="content">
                <h2>Descubra seu próximo check-point</h2>
               <p>Explore uma vasta seleção de jogos, desde épicos consagrados até as últimas novidades, descubra os jogos que estão em alta na comunidade ou busque informações sobre um game desejado.</p>
                <p><span>Adicione os games mais cobissados por você a sua lista de desejos.</span></p>
                <div id="img">
                <img src={imagem} alt="Game" /></div>
                </div>
                <div className="loginForm">
                    <Form className="formulario">
                    <div id="loginHeader">
                        <h2>Login</h2>
                    </div>
                    <div id="fields">
                        <div id="usuario">
                            <label>Usuario:</label>
                            <div id="fieldUser">
                            <i class="fa-solid fa-user"></i><input onChange={(e)=> setLogin(e.target.value)} type="text" placeholder='Nome de usuario'/>
                            </div>
                        </div>
                        <div id="senha">
                            <label>Senha:</label>
                            <div id="fieldSenha">
                            <i class="fa-solid fa-key"></i><input onChange={(e)=> setSenha(e.target.value)} type="password" placeholder='Digite sua senha'/>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleLogin}>Entrar</button>
                    <button onClick={() => navigate('/addUser')} style={{ textDecoration: 'none' }}>Não possui uma conta ? Crie aqui</button>
                </Form>
                </div>
            </div>
        </div>
    )
}