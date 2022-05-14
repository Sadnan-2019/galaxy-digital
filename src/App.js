// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Goal from './components/Goal/Goal';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
// import Products from './components/Products/Products';
// import Sliders from './components/Sliders/Sliders';
// import Team from './components/Team/Team';

function App() {
  return (
    <div className="">
       <Header></Header> 
        

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Products/>}></Route>
        </Routes> 
       {/* <Products></Products>
      <Goal></Goal> 
       <Team></Team> */}
      
    </div>
  );
}

export default App;
