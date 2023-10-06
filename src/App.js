import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/form/login/Login'
import Register from './components/form/register/Register'
import Home from './components/home/Home'
function App() {
  return (

    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
