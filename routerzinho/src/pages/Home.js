import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import "./home.css"

const Home = () => {

    const url = "http://localhost:3000/produtos"

    const {data: items} = useFetch(url)
  return (
    <div>

<h1>Produtos</h1>

      <ul className='produtos'>

       

       {items && items.map((produto) => (
        <li key={produto.id}>
          <h2>{produto.nome}</h2>

          <p>{produto.tamanho}</p>


          
          {/* Rota Dinâmica*/}
          <Link to={`/products/${produto.id}`}>Detalhes</Link>
        </li>
        
        ))}

          
        
          
          

        
      </ul>

    </div>
  )
}

export default Home