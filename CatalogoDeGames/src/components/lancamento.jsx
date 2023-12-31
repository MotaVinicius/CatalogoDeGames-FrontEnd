import {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../GamesGrid.css';
import { Link } from 'react-router-dom';


export default function Lancamentos(){
    const [lancamento , setLancamento] = useState ([]);
    useEffect(() => {
        axios.get('http://18.230.17.49:3333/lancamento').then(resposta => setLancamento(resposta.data));
    },[]);

    function handleRemove(event){
        //se ok, return true; se cancel, return false
        let confirm = window.confirm('Deseja excluir o registro selecionado?');
        if(confirm){
            axios.delete(`http://18.230.17.49:3333/remover/${event.target.getAttribute('data-id')}`).then(resposta => {
                alert(resposta.data.message);
                listar();
            });
        }
    }

    return(
        <div className="page">
            <h2>Lançamentos</h2>
            <div className="game-card">
                    {lancamento.map(itemLancamento => {
                        return(
                            <Card id='fullCard' style={{ width: '18rem', height:'32rem', backgroundColor: '#a8a8a851', margin:'2em', color:"white" }}>
                                <Card.Img style={{height:'20rem' }} variant="top" src={itemLancamento.image_url} alt={itemLancamento.name} key={itemLancamento._id} />
                                <Card.Body  style={{display: 'flex', justifyContent:'space-evenly', flexDirection:'column', height:'12rem'}}>
                        
                        <Card.Title style={{}}>{itemLancamento.name}</Card.Title>
                        <Card.Subtitle style={{}}>{itemLancamento.genero}</Card.Subtitle>
                        <Card.Text style={{}}>{itemLancamento.ratings === 10 ? ( 
                        <>
                        <i class="bi bi-star-fill" style={{color: 'gold'}} ></i> {itemLancamento.ratings}
                        </> ) : (
                            <>
                            <i class="bi bi-star-half" style={{color: 'gold'}} ></i> {itemLancamento.ratings}
                            </>
                        )}
                        </Card.Text>
                        <div className="botoes">
                                            <Link to={`/detalhes/${itemLancamento._id}`}><Button style={{width: '100%'}} variant="danger">Detalhes</Button></Link>
                                            <div id="editbuttons">
                                        <Link to={`/editar/${itemLancamento._id}`}><Button id='edit' variant="dark" style={{width: '49.5%', backgroundColor:''}}>Editar &nbsp;<i className="bi bi-pencil-fill"></i></Button></Link>
                                            <Button id='remove' data-id={itemLancamento._id} onClick={handleRemove} variant="dark" style={{width: '49.5%'}}>Remover &nbsp;<i className="bi bi-trash-fill"></i></Button>
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