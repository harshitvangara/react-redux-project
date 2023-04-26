import Header from './containers/Header';
import './App.css';
import {Routes,Route} from "react-router-dom"
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import ProductComponent from './containers/ProductComponent';
//import { Navbar } from './containers/Navbar';
function App() {
  return (
    <div className="App">
     
    
     <Header/>
     <Routes>
    <Route path="/" element={<ProductListing/>}/>
    <Route path="/product/:productId" element={<ProductDetail/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
