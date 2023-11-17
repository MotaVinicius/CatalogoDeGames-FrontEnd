import {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../GamesGrid.css';
import { Link } from 'react-router-dom';


export default function FullListagem(){
    const [fulllista , setfullLista] = useState ([]);
    useEffect(() => {
        axios.get('http://localhost:3333/full').then(resposta => setfullLista(resposta.data));
    },[]);
    return(
        <div className="page">
            <h2>Catalogo Completo</h2>
            <div className="game-card">
                    {fulllista.map(itemfullLista => {
                        return(
                            <Card id='fullCard' style={{ width: '19rem', height:'32rem', backgroundColor: '#a8a8a851', margin:'2em', color:"white" }}>
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
                                        <Link to={`/detalhes/${itemfullLista._id}`}><Button style={{}} variant="danger">Detalhes</Button></Link>
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