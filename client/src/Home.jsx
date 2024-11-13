import bull_img from '/bull-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import logo from '/bullrun_logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
const Home=()=>{
    const navigate = useNavigate();
    const navToLogin=()=>{
         navigate('/login');
    } 
    return(
          <>
          <div id='home-navbar'>
      <div id='home-navbar-divlogo'>
      <img src={logo} alt="" id='home-navbar-divlogo-img'/>
      <h2>BULLRUN</h2>  
        </div>      
      <button type="button" id='home-navbar-button' className='button' onClick={navToLogin}>LogIn/SignUp</button>
      </div>
      
        </>
    )
}
export default Home;