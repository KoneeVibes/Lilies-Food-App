import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import RouteProtector from './components/RouteProtector';

function App() {
    
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route element={<RouteProtector/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;