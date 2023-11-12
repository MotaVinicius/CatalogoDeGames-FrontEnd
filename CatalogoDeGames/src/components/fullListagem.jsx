import {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../GamesGrid.css';


export default function FullListagem(){
    const [fulllista , setfullLista] = useState ([]);
    useEffect(() => {
        axios.get('http://localhost:3333/full').then(resposta => setfullLista(resposta.data));
    },[]);
    return(
        <div className="page">
            <h2>Melhores Avaliados</h2>
            <div className="game-card">
                    {fulllista.map(itemfullLista => {
                        return(
                            <Card style={{ width: '18rem', height:'30rem', backgroundColor: '#a8a8a851', margin:'2em', color:"white" }}>
                                <Card.Img style={{height:'20rem' }} variant="top" src={itemfullLista.image_url} alt={itemfullLista.name} key={itemfullLista._id} />
                                <Card.Body>
                                    <div style={{display: 'flex', justifyContent:'space-evenly', flexDirection:'column'}}>
                                        <Card.Title style={{}}>{itemfullLista.name}</Card.Title>
                                        <Card.Subtitle style={{}}>{itemfullLista.genero}</Card.Subtitle>
                                        <Button style={{marginTop:'1.5em'}} variant="danger">Detalhes</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}
            </div>
        </div>
    )
}