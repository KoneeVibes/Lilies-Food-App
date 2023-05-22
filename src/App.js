import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import RouteProtector from './components/RouteProtector';
import { Layout } from './pages/Layout';
import { ContextProvider } from './context/Context';

function App() {

  return (
    <ContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route element={<RouteProtector />}>
              <Route path='/dashboard' element={<Layout />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;