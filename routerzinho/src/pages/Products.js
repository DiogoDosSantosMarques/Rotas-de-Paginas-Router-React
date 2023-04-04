import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

// Esta Página é dedicada para exibir o id dentro dos detalhes do produto junto com as informações ja presente na home


const Products = () => {

  const { id } = useParams()

  //Carregamento de Dados Individual
const url = "http://localhost:3000/produtos/" + id

  const {data: produto} = useFetch(url)

 
  return (
    <div>

<p>Código de rastreamento: {id}</p> {/* Rotas Dinâmicas*/}


{/*Resgatando dados do Use Fetch */}
{produto && (
<div>

  <h1>{produto.nome}</h1>

  <p>{produto.tamanho}</p>




  {/* Nested Route*/}
  <Link to={`/products/${produto.id}/info`}> Mais Informações Sobre {produto.nome}</Link>

</div>

)}



    </div>

    
  )
}

export default Products