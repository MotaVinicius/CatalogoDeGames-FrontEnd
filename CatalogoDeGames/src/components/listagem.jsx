import {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../GamesGrid.css';


export default function Listagem(){
    const [lista , setLista] = useState ([]);
    useEffect(() => {
        axios.get('http://18.230.17.49:3333').then(resposta => setLista(resposta.data));
    },[]);
    return(
        <div className="game-card">
                    {lista.map(itemLista => {
                        return(
                            <Card style={{ width: '18rem', height:'30rem', backgroundColor: '#a8a8a8aa', margin:'2em' }}>
                                <Card.Img style={{height:'20rem' }} variant="top" src={itemLista.image_url} alt={itemLista.name} key={itemLista._id} />
                                <Card.Body>
                                    <div style={{display: 'flex', justifyContent:'space-evenly', flexDirection:'column'}}>
                                        <Card.Title style={{}}>{itemLista.name}</Card.Title>
                                        <Card.Subtitle style={{}}>{itemLista.genero}</Card.Subtitle>
                                        <Button style={{marginTop:'1em'}} variant="danger">Detalhes</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}
        </div>
    )
}