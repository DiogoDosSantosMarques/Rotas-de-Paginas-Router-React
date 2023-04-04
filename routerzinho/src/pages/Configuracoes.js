import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Configuracoes = () => {
    const url = "http://localhost:3000/produtos"

    const {data: items} = useFetch(url)
  return (
    <div>
<ul>
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

export default Configuracoes