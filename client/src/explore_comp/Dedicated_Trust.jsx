import { useState, useEffect } from "react";
import axios from 'axios';
import Loading_Spinner from '../../components/Loading_Spinner';
import './explore_comp.css';
const Dedicated_Trust = ()=>{
    const API = "https://financialmodelingprep.com/api/v3/stock/list?apikey=7tb1GX4qTBrrwWjhi0m97bdp2AVJES4g";
    const API2 = "https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=7tb1GX4qTBrrwWjhi0m97bdp2AVJES4g";
   const [Loading,setLoading] = useState(true);
   const [TopGainer, setTopGainer] = useState([]);
    const [TopLosser, setTopLosser] = useState([]);
    const getTrustData=()=>{
          const res = axios.get(API);
        //   const res =
    }
    useEffect(()=>{
             getTrustData();
    },[])
    return (
        <>

        </>
    )
}
export default Dedicated_Trust;