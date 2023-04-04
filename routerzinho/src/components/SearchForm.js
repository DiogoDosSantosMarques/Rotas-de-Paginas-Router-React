import { useNavigate } from "react-router-dom" //

import { useState } from "react"

const SearchForm = () => {

    const navigate = useNavigate() 

    const [busca, setBusca] = useState() // Utilizar o valor dele pra pegar a busca

    const handleSubmit = (e) => {

        e.preventDefault()
       
        // apenas para não ficar recarregando a página quando o usuário clicar no botão

        navigate("/search?q=" + busca)
    }

  return (
    <div>

<form onSubmit={handleSubmit}>

<input type="text" onChange={(e) => setBusca (e.target.value)} />
<input type="submit" value="Buscar Produto" />

</form>



    </div>
  )
}

export default SearchForm