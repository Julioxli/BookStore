import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import Api from "../components/configAPI";

const ContLerMais = () => {

  
  const{id} = useParams()

    const [livros, setLivros] = useState([]);
 
    useEffect(() => {
  
      Api.get(`/livros/${id}`)
      .then((Response) => {
        setLivros(Response.data)
      })

    }, [])

    return(
      <div className="content">
        <p>{livros.nome}</p>
        <p>{livros.autor}</p>
        <p>{livros.preco}</p>
        <p>{livros.prefacio}</p>
        <p>{livros.genero}</p>
        <p>{livros.capa}</p>
      </div>
    )
  
}

export default ContLerMais