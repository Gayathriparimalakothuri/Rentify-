import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Seller from './components/Seller';
import Buyer from './components/Buyer';
function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home/seller' element={<Seller/>}></Route>
        <Route path='/home/buyer' element={<Buyer/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
