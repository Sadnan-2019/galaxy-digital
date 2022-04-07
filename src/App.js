// import logo from './logo.svg';
import './App.css';
import Goal from './components/Goal/Goal';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Sliders from './components/Sliders/Sliders';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="">
       <Header></Header> 
       <Sliders></Sliders>
     
       <Goal></Goal> 
       <Products></Products>
      <Team></Team>  
       {/* <Products></Products>
      <Goal></Goal> 
       <Team></Team> */}
    </div>
  );
}

export default App;
