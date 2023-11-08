import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Listagem from './components/listagem';
import './App.css';

function App() {
  return (
     <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="danger" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Gamezada.gg</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/listar">
                <Nav.Link>Em alta</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/adicionar">
                <Nav.Link>Catalogo</Nav.Link>
            </LinkContainer>            
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

    <Container>
      <Row className="justify-content-md-center">
        <Routes>
            <Route path="/" element={<Listagem /> }></Route>
            <Route path="/listar" element={<Listagem /> }></Route>
        </Routes>
      </Row>
    </Container>

    </div>
  )
}

export default App
