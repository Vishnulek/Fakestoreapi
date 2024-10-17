import logo from './logo.svg';
import './App.css';
import Viewall from './components/Products';
import Products from './components/Products';
import Add from './components/Add';
import Delete from './components/Delete';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Add/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/delete' element={<Delete/>}/>
    <Route path='/viewall' element={<Products/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
