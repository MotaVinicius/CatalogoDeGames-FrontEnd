import { useState } from "react";
import { Form } from 'react-bootstrap';
import axios from "axios";
import '../login.css';
import imagem from "./../image/game.svg"




export default function CriarConta(){
    
    const [login,setLogin] = useState('');
    const [senha,setSenha] = useState('');
    const [nome,setNome] = useState('');

function handleCreate(event){
    const senha1 = document.querySelector('#senha1');
    const senha2 = document.querySelector('#senha2');
    if(login && senha && nome){
        if(senha1.value == senha2.value){
            event.preventDefault();
            axios.post('http://localhost:3000/addUser',{login: login, senha: senha, nome: nome}).then((resposta)=>alert(resposta.data.message));
            Navigate('/login')
        } else {
            alert('Senhas nao conferem.')
        }
    } else {
        alert('Preencha todos os campos corretamente.')
    }
}



    return(
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
                    <div id="nome">
                            <label>Nome:</label>
                            <div id="fieldNome">
                            <i class="fa-solid fa-user"></i><input onChange={(e)=> setNome(e.target.value)} required type="text" placeholder='Seu nome'/>
                            </div>
                        </div>
                        <div id="usuario">
                            <label>Usuario:</label>
                            <div id="fieldUser">
                            <i class="fa-solid fa-user"></i><input onChange={(e)=> setLogin(e.target.value)} required type="text" placeholder='Nome de usuario'/>
                            </div>
                        </div>
                        <div id="senha">
                            <label>Senha:</label>
                            <div id="fieldSenha">
                            <i class="fa-solid fa-key"></i><input id="senha1" onChange={(e)=> setSenha(e.target.value)} required type="password" placeholder='Digite sua senha'/>
                            </div>
                        </div>
                        <div id="confirmarSenha">
                            <label>Confirme sua senha:</label>
                            <div id="fieldConfirmar">
                            <i class="fa-solid fa-key"></i><input id="senha2" required type="password" placeholder='Digite a senha novamente'/>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleCreate}>Criar Conta</button> 
                </Form>
                </div>
            </div>
        </div>

    )
}