import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import '../formadd.css'


export default function FormularioAdd(){
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [image_url,setImage_url] = useState('');
    const [ratings,setRatings] = useState(0);
    const [genero,setGenero] = useState('');
    const [lancamento, setLancamento] = useState(0);

    const { Formik } = formik;

   
  
    const anoAtual = new Date().getFullYear();
    let anos = [];
    for(let i=anoAtual; i>= 1972; i--)
        anos.push(<option value={i} key={i}>{i}</option>);

    const nota = []
    for(let i=10; i>=0; i--)
      nota.push(<option value={i} key={i}>{i}</option>)

    

    const schema = yup.object().shape({
    name: yup.string().required(),
    genero: yup.string().required(),
    description: yup.string().required(),
    lancamento: yup.number().required(),
    ratings: yup.number().required(),
    image_url: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

    function handleSave(event){
        if(name && description && image_url && ratings && genero && lancamento){
            event.preventDefault();
            axios.post('http://localhost:3333/add',{'name': name,'description': description,'image_url': image_url,'genero': genero,'ratings': ratings,'lancamento': lancamento}).then((resposta)=>alert(resposta.data.message));
            navigate('/fullListagem');
        } else {
          alert('Preencha todos os campos corretamente.')
        }
    }

    return(
    <div id="Countainer">
        <div id="titulo">Adicionar novo jogo</div>
        <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: '',
        genero: '',
        username: '',
        description: '',
        lancamento: '',
        ratings: '',
        image_url: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} style={{color:'white'}} id="formadd">
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                placeholder="Nome do game"
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Genero</Form.Label>
              <Form.Control
                type="text"
                required
                name="genero"
                placeholder="Ex: Ação e aventura / Plataforma"
                value={genero}
                onChange={(e)=> setGenero(e.target.value)}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sinópse, resumo ou descrição"
                name="description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>Lançamento</Form.Label>
              <Form.Select
                onChange={(e)=> setLancamento(e.target.value)} value={lancamento} required
              >
                <option value="">Selecione o ano</option>{anos}
              </Form.Select>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik105"
              className="position-relative"
            >
              <Form.Label>Nota</Form.Label>
              <Form.Select
                onChange={(e)=> setRatings(e.target.value)} value={ratings} required
              >
                <option value="">Selecione a nota</option>{nota}
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Capa (Url da imagem)</Form.Label>
            <Form.Control
              type="text"
              required
              name="image_url"
              onChange={(e)=> setImage_url(e.target.value)}
              
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.image_url}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Afirmo estar de acordo com os termos e condições de uso."
              onChange={handleChange}
              
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit" variant="danger" onClick={handleSave} style={{width:'100%'}}>Adicionar</Button>
        </Form>
      )}
    </Formik>
    </div>
    )

}