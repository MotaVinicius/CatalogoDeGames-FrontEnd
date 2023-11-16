import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../detalhes.css';

export default function Detalhes(){
    //const [lista , setLista] = useState ([]);
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState('');
    const [ratings,setRatings] = useState(0);
    const [genero,setGenero] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

useEffect(()=>{
    if(id){
        axios.get(`http://localhost:3333/detalhes/${id}`).then(resposta => {
          if(resposta.data){
            setName(resposta.data.name);
            setDescription(resposta.data.description);
            setImage(resposta.data.image_url);
            setRatings(resposta.data.ratings);
            setGenero(resposta.data.genero);
          }
        else{
            alert("Registro não encontrado para edição.");
            navigate('/listar');
          }
})}
},[id])

    return(
        <div className="page">
            <div id="header">
                <div id="main">
                    <div id="image">
                        <img src={image} alt="Capa" />
                        <h3>{genero}</h3>
                        <h3>{ratings}</h3>
                    </div>
                    <div id="text">
                        <div id="titulo">
                            <h1>{name}</h1>
                        </div>
                        <div id="descricao">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}