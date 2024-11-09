import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import Home from './Home.jsx'
import Explore from './Explore.jsx'
import GoogleLogIn from './GoogleLogIn.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  const GoogleAuthWrapper=()=>{
    return (<GoogleOAuthProvider clientId='90272880568-1f39d6rf5nh83cl5tg9lu1mqk36uf13r.apps.googleusercontent.com'
    >
      <GoogleLogIn></GoogleLogIn>
    </GoogleOAuthProvider>)
  }
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<GoogleAuthWrapper/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
