import {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../GamesGrid.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export default function FullListagem(){
    const [fulllista , setfullLista] = useState ([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://18.230.17.49:3333/full').then(resposta => setfullLista(resposta.data));
    },[]);

    function handleRemove(event){
        //se ok, return true; se cancel, return false
        let confirm = window.confirm('Deseja excluir o registro selecionado?');
        if(confirm){
            axios.delete(`http://18.230.17.49:3333/remover/${event.target.getAttribute('data-id')}`).then(resposta => {
                alert(resposta.data.message);
                navigate('/listar');
            });
        }
    }

    return(
        <div className="page">
            <h2>Catalogo Completo</h2>
            <div className="game-card">
                    {fulllista.map(itemfullLista => {
                        return(
                            <Card id='fullCard' style={{ width: '18rem', height:'32rem', backgroundColor: '#a8a8a851', margin:'2em', color:"white" }}>
                                <Card.Img style={{height:'20rem' }} variant="top" src={itemfullLista.image_url} alt={itemfullLista.name} key={itemfullLista._id} />
                                <Card.Body  style={{display: 'flex', justifyContent:'space-evenly', flexDirection:'column', height:'12rem'}}>
                        
                                        <Card.Title style={{}}>{itemfullLista.name}</Card.Title>
                                        <Card.Subtitle style={{}}>{itemfullLista.genero}</Card.Subtitle>
                                        <Card.Text style={{}}>{itemfullLista.ratings === 10 ? ( 
                                        <>
                                        <i class="bi bi-star-fill" style={{color: 'gold'}} ></i> {itemfullLista.ratings}
                                        </> ) : (
                                            <>
                                            <i class="bi bi-star-half" style={{color: 'gold'}} ></i> {itemfullLista.ratings}
                                            </>
                                        )}
                                        </Card.Text>
                                        <div className="botoes">
                                            <Link to={`/detalhes/${itemfullLista._id}`}><Button style={{width: '100%'}} variant="danger">Detalhes</Button></Link>
                                            <div id="editbuttons">
                                        <Link to={`/editar/${itemfullLista._id}`}><Button id='edit' variant="dark" style={{width: '49.5%', backgroundColor:''}}>Editar &nbsp;<i className="bi bi-pencil-fill"></i></Button></Link>
                                            <Button id='remove' data-id={itemfullLista._id} onClick={handleRemove} variant="dark" style={{width: '49.5%'}}>Remover &nbsp;<i className="bi bi-trash-fill"></i></Button>
                                        </div>
                                        </div>
                                        
                            
                                </Card.Body>
                            </Card>
                        )
                    })}
            </div>
        </div>
    )
}