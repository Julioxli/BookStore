
import { useState, useEffect } from "react";
import styles from './ContHome.css';
import { Link } from 'react-router-dom';
import livroFech from './configAPI';


const ContHome = () => {

  const [livros, setLivros] = useState([]);

  const getLivros = async() => {

    try {

      const response = await livroFech.get("/livros");
      

      const data = response.data;

      setLivros(data);

      console.log(data);
      
    } catch (error) {
      console.log(error);
    }

  }
  

  useEffect(() => {

    getLivros();

  }, [])

  if(!livros || !livros.length) return <div className='loading'>carregando</div>

  // '/livro/${livro.id}'

  return (

    <div className='estante'>
      {livros.map((card) => {
        const { id, nome, capa, autor, prefacio, preco, genero} = card;

        return(


          <div className="livro">

            <img className="capa" src="https://picsum.photos/seed/picsum/200/300" alt='' />

          <div className="inform">
          <Link to={`/livro/${id}`}><h3>{nome}</h3></Link>
           <div className="linhas">
            <hr /> // <hr />
           </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quas, obcaecati nulla minus expedita autem maiores in quo, optio earum dolorem libero. Odio laborum voluptates aliquam provident aut laudantium non.</p>
            <h4>{preco}</h4>
          </div>
           
          </div>

        )

        })}

  </div>

  )
}

export default ContHome