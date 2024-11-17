// import bull_img from '/bull-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import Hero from './home_compo/Hero.jsx'
import Stats from './home_compo/Stats.jsx'
import Pricing from './home_compo/Pricing.jsx'
import Education from './home_compo/Education.jsx'
import OpenAccount from './home_compo/OpenAccount.jsx'

import logo from '/BullLogo.png';
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
        
        </div>      
      <button type="button" id='home-navbar-button' className='button' onClick={navToLogin}>LogIn/SignUp</button>
      </div>
      <Hero/>
      
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
        </>
    )
}
export default Home;