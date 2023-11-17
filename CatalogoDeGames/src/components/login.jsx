import { Form } from 'react-bootstrap';
import '../login.css';
import imagem from "./../image/game.svg"


export default function Login(){
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
                            <i class="fa-solid fa-user"></i><input type="text" placeholder='Nome de usuario'/>
                            </div>
                        </div>
                        <div id="senha">
                            <label>Senha:</label>
                            <div id="fieldSenha">
                            <i class="fa-solid fa-key"></i><input type="password" placeholder='Digite sua senha'/>
                            </div>
                        </div>
                    </div>
                    <button>Entrar</button>         
                </Form>
                </div>
            </div>
        </div>
    )
}