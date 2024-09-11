import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import layout from './Layout/layout';
import Catalogo from './Catalogo/Catalogo';
import Layout from './Layout/layout';
import NotFound from './NotFound/Not';
import Contato from './Contato/contato';
import Servicos from './Servico/servico';
import Sobre from './Sobre/sobre';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
         <Route index element ={<Catalogo/>} />
         <Route path='*' element={<NotFound/>}/>
         <Route path='/contato' element={<Contato/>}/>
         <Route path='/servicos' element={<Servicos/>}/>
         <Route path='/sobre' element={<Sobre/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
