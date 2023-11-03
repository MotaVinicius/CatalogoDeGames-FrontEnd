import {useEffect, useState} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';

export default function Listagem(){
    const [lista , setLista] = useState ([]);
    useEffect(() => {
        axios.get('http://18.230.17.49:3333').then(resposta => setLista(resposta.data));
    },[]);
    return(
        <>
            <h1>Catalogo de Jogos</h1>
            <Table id='tabela' striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Capa</th>
                        <th>Genero</th>
                        <th>Lançamento</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(itemLista => {
                        return(
                            <tr key={itemLista._id}>
                                <td>{itemLista.name}</td>
                                <td>{itemLista.image_url}</td>
                                <td>{itemLista.genero}</td>
                                <td>{itemLista.lancamento}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}