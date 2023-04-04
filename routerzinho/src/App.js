
import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Info from './pages/Info';
import NotFound from './pages/NotFound';


import NavBar from './components/NavBar';
import Configuracoes from './pages/Configuracoes';
import SearchForm from './components/SearchForm';
import Buscar from './pages/Buscar';


function App() {

  









  return (
    <div className="App">
      <h2>React Router</h2>

      <BrowserRouter> {/* Tudo que Está acima de Routes será repetido em todas as páginas*/}
      
      <NavBar /> {/* Nesse caso o NavBar tem elementos do Router então é preciso estar dentro do BrowserRoute*/}
     
    {/* Pesquisar por Produto*/}

    <SearchForm />


      <Routes>
       
<Route path="/" element = {<Home />} />        {/* Página Home criada em pages*/}
<Route path="/about" element= {<About />} />   {/* Página About também criada em pages*/}
<Route path="/configuracoes" element= {<Configuracoes />} />   {/* Página About também criada em pages*/}
<Route path="/search" element = {<Buscar />} />

{/* Redirecionamento caso mude a url da pagina*/}
<Route path="/messi" element={<Navigate to="/about" />} />


{/* Rota Dinâmica*/}
<Route path="/products/:id" element={<Products />} />

<Route path="/products/:id/info" element={<Info />} />




    {/* Error 404*/}
    <Route path="*" element={<NotFound />} />
      </Routes>
      
      
      </BrowserRouter>

      

    </div>
  );
}

export default App;
