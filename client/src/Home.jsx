import bull_img from '/bull-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import logo from '/bullrun_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'
const Home=()=>{
    const navigate = useNavigate();
    const navToLogin=()=>{
         navigate('/login');
    } 
    return(
        <>
        <div>
      <img src={logo} alt="" className="rounded-5 m-1 "/>
      <button type="button" onClick={navToLogin} className="btn btn-outline-primary">Click</button>
      </div>
        </>
    )
}
export default Home;