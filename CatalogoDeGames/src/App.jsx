import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Listagem from './components/listagem';
import './App.css';
import Lancamentos from './components/lancamento';
import FullListagem from './components/fullListagem';
import Detalhes from './components/detalhes';
import Login from './components/login';
import FormularioAdd from './components/formadd';



function App() {
 /* const token = localStorage.getItem("token");
  if(!token)
    return <Login />*/

  return (
     <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="danger" data-bs-theme="dark" id="topo">
      <Container>
        <Navbar.Brand style={{cursor:'default'}}>Gamezada.gg</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/listar">
                <Nav.Link>Em alta</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/lancamento">
                <Nav.Link>Lançamento</Nav.Link>
            </LinkContainer> 
            <LinkContainer to="/fullListagem">
                <Nav.Link>Catalogo Completo</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Opções" id="collapsible-nav-dropdown">
            <LinkContainer to="/add">
                <NavDropdown.Item className='drop'>Adicionar</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/fullListagem">
                <NavDropdown.Item className='drop'>Editar</NavDropdown.Item>
            </LinkContainer>    
            </NavDropdown>     
          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button id='botao' variant="outline-success"><i class="fa-solid fa-magnifying-glass"></i></Button>
                  </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className='conteudo'>
      <Row className="justify-content-md-center">
        <Routes>
            <Route path="/" element={<Listagem /> }></Route>
            <Route path="/listar" element={<Listagem /> }></Route>
            <Route path="/lancamento" element={<Lancamentos /> }></Route>
            <Route path="/fullListagem" element={<FullListagem /> }></Route>
            <Route path="/detalhes/:id" element={<Detalhes />}></Route>
            <Route path="/add" element={<FormularioAdd />}></Route>


        </Routes>
      </Row>
    </Container>
    <div className="rodape">
     <p>&copy; Todos os direitos reservados.</p> 
    </div>
    <a href="#topo" title="Retornar ao topo">
      <div className='botaoTopo' >
        <i class="bi bi-arrow-up-circle-fill"></i>
      </div>
    </a>
    </div>
  )
}


export default App
