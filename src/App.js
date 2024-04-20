
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import ProductList from './Components/Product List/ProductList';
import ProductView from './Components/Product View/ProductView';

function App() {
  return (
   <>
   <Header/>
   <Hero/>
   <Routes>
    <Route path='/' element={<ProductList/>}></Route>
    <Route path='/product/:id' element={<ProductView/>}></Route>
   </Routes>
   <Footer/>
   </>
  
  );
}

export default App;
