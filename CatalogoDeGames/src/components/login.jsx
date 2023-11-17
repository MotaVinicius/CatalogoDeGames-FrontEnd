import { Form } from 'react-bootstrap';
import '../login.css';


export default function Login(){
    return (
        <div className="Countainer">
            <div className="topBar">
                <h1><span>G</span>ame<span>Z</span>ada</h1>
            </div>

            <div id='body'>
            <div id="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur, rerum, voluptatibus totam nisi ea non eum animi alias tempora quaerat eveniet, facilis eius similique incidunt sit voluptates magnam dignissimos!
            </div>
            <div className="loginForm">
                <Form className="formulario">
                <div id="loginHeader">
                    <h2>Login</h2>
                </div>
                    
                    <div id="fields">
                        <div id="usuario">
                            <label>Usuario:</label>
                            <input type="text" placeholder='Nome de usuario'/>
                        </div>
                        <div id="senha">
                            <label>Senha:</label>
                            <input type="password" placeholder='Digite sua senha'/>
                        </div>
                    </div>
                    <button>Entrar</button>         
                </Form>
                </div>
            </div>
        </div>
    )
}