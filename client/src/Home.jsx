// import bull_img from '/bull-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import Hero from './home_comp/Hero.jsx'
import Stats from './home_comp/Stats.jsx'
import logo from '/bullrun_logo.png';
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
      <Hero/>
      
      <Stats/>
        </>
    )
}
export default Home;