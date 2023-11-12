import {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../GamesGrid.css';


export default function Lancamentos(){
    const [lancamento , setLancamento] = useState ([]);
    useEffect(() => {
        axios.get('http://localhost:3333/lancamento').then(resposta => setLancamento(resposta.data));
    },[]);
    return(
        <div className="page">
            <h2>Lançamentos</h2>
            <div className="game-card">
                    {lancamento.map(itemLancamento => {
                        return(
                            <Card style={{ width: '18rem', height:'30rem', backgroundColor: '#a8a8a851', margin:'2em', color:"white" }}>
                                <Card.Img style={{height:'20rem' }} variant="top" src={itemLancamento.image_url} alt={itemLancamento.name} key={itemLancamento._id} />
                                <Card.Body>
                                    <div style={{display: 'flex', justifyContent:'space-evenly', flexDirection:'column'}}>
                                        <Card.Title style={{}}>{itemLancamento.name}</Card.Title>
                                        <Card.Subtitle style={{}}>{itemLancamento.genero}</Card.Subtitle>
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