import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


const Buscar = () => {

    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/produtos?" + searchParams

    const {data: items} = useFetch(url)

  return (
    <div>

        <h1>Produtinho</h1>
<ul className='produtos'>

       

{items && items.map((produto) => (
 <li key={produto.id}>
   <h2>{produto.nome}</h2>

   <p>{produto.tamanho}</p>


  
   <Link to={`/products/${produto.id}`}>Detalhes</Link>
 </li>
 
 ))}

   
 
   
   

 
</ul>
    

    </div>
  )
}

export default Buscar