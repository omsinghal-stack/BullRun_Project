<<<<<<< HEAD
import './home_comp.css';
import { useNavigate } from "react-router-dom"
const OpenAccount=()=>{
    const navigate = useNavigate();
    const RedirectToSignup=()=>{
        navigate('/signup');
    }
 return (
    <>
    <div>
    <div>
        <h1>Open a Zerodha account</h1>
        <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button onClick={RedirectToSignup}>Signup For Free</button>
    </div>
</div>

    </>
 )
}
=======
import './home_comp.css';
import { useNavigate } from "react-router-dom"
const OpenAccount=()=>{
    const navigate = useNavigate();
    const RedirectToSignup=()=>{
        navigate('/signup');
    }
 return (
    <>
    <div>
    <div id="hero">
        <h1>Open a Zerodha account</h1>
        <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button onClick={RedirectToSignup}>Signup For Free</button>
    </div>
</div>

    </>
 )
}
>>>>>>> origin/main
export default OpenAccount