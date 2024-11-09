import bull_img from '/bull-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
const Home=()=>{
    const navigate = useNavigate();
    const navToLogin=()=>{
         navigate('/login');
    } 
    return(
        <>
     
      <button type="button" onClick={navToLogin} className="btn btn-outline-primary">Click</button>
        </>
    )
}
export default Home;