import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Api from "../components/configAPI";




const Home = () => {

  const [livros, setLivros] = useState([]);

  const getLivros = async() => {

    try {

      const response = await Api.get("/livros");
      

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



  return (
    
    <div className=' grid grid-cols-2 gap-1 max-sm:grid-cols-1  md:grid-cols-2 w-50 max-lg:grid-cols-2  bg-blue-300   mr-0'>
      {livros.map((card) => {
        const { id, nome, capa, autor, prefacio, preco, genero} = card;

        return(          
          <div className="flex flex-col items-center ml-4 mr-4  bg-white border  rounded-lg  md:flex-row md:max-w-xl mt-3 mb-3">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-48 md:rounded-none md:rounded-l-lg" src={capa} alt={nome} />
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl tracking-tight text-gray-400 text-mb pb-2 font-semibold hover:text-blue-300 cursor-pointer">{nome}</h5>
                  <p className="mb-3 font-normalfont-semibold text-gray-400 hover:text-blue-300 cursor-pointer">Autor: {autor}</p>
                  <Link className="mb-3 font-normalfont-semibold text-gray-400 hover:text-blue-300 cursor-pointer" to={`/lermais/${id}`} >Ler mais</Link>
              </div>
          </div>
          )

        })}

  </div>
  
  )
}

export default Home