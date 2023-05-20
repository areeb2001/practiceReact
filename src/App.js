import logo from './logo.svg';
import './App.css';
import ComA from './ComA';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import contact from './contact';
import about from './about';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' Component={ComA}/>
      <Route path='/about' Component={about}/>
      <Route path='/contact' Component={contact}/>
    </Routes>
    </>
  );
}

export default App;
