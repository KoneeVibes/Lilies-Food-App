import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='login' element={<Login/>}>Login</Route>
          <Route path='signUp' element={<SignUp/>}>Sign Up</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;