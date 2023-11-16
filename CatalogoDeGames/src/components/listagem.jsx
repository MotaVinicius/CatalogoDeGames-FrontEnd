import {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../GamesGrid.css';
import { Link } from 'react-router-dom';


export default function Listagem(){
    const [lista , setLista] = useState ([]);
    useEffect(() => {
        axios.get('http://localhost:3333').then(resposta => setLista(resposta.data));
    },[]);
    return(
        <div className="page">
            <h2>Melhores Avaliados</h2>
            <div className="game-card">
                    {lista.map(itemLista => {
                        return(
                            <Card id='fullCard' style={{ width: '19rem', height:'32rem', backgroundColor: '#a8a8a851', margin:'2em', color:"white" }}>
                                <Card.Img style={{height:'20rem' }} variant="top" src={itemLista.image_url} alt={itemLista.name} key={itemLista._id} />
                                <Card.Body  style={{display: 'flex', justifyContent:'space-evenly', flexDirection:'column', height:'12rem'}}>
                        
                                        <Card.Title style={{}}>{itemLista.name}</Card.Title>
                                        <Card.Subtitle style={{}}>{itemLista.genero}</Card.Subtitle>
                                        <Card.Text style={{}}>{itemLista.ratings === 10 ? ( 
                                        <>
                                        <i class="bi bi-star-fill" style={{color: 'gold'}} ></i> {itemLista.ratings}
                                        </> ) : (
                                            <>
                                            <i class="bi bi-star-half" style={{color: 'gold'}} ></i> {itemLista.ratings}
                                            </>
                                        )}
                                        </Card.Text>
                                        <div className="botoes">
                                        <Link to={`/detalhes/${itemLista._id}`}><Button style={{}} variant="danger">Detalhes</Button></Link>
                                        <Button style={{}} variant="primary">Adicionar a minha lista</Button>
                                        </div>
                                        
                            
                                </Card.Body>
                            </Card>
                        )
                    })}
            </div>
        </div>
    )
}