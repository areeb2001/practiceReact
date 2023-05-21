import logo from './logo.svg';
import './App.css';
import ComA from './ComA';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Contact from './contact';
import About from './about';
import Users from './users';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' Component={()=><ComA/>}/>
      <Route path='/about' Component={
        ()=>
      <About name='About Page!' />
      }/>
      <Route path='/contact' Component={
        ()=>
        <Contact name='Contact Page! '/>
      }/>
      <Route path='/users/:res' Component={
        ()=>
        <Users/>
      }/>
    </Routes>
    </>
  );
}

export default App;
