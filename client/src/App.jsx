import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LogIn from '../components/LogIn.jsx';
import SignUp from '../components/SignUp.jsx';
import Home from './Home.jsx';
const App=()=>{
 return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LogIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>   
    </Routes>
    </BrowserRouter>
    </>
 )
}
export default App;
