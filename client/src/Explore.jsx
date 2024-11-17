import axios from 'axios'
import { useEffect, useState } from 'react';
const Explore = ()=>{
   const API = "https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=POx9PiDc9nnBzmbrjUtIVbmvLECjGQ45";
   const [StockData,setStockData] = useState([]);
   const [FilterData,setFilterData] = useState([]);
   const getStockData=async()=>{
       try{
           const res =await axios.get(API);
           setStockData(res.data);
           setFilterData (StockData.filter((st)=>{
               return st.volume>=0
            }))
            console.log(filter);
       }catch(err){
          console.log(err);
       }
   }
   
   useEffect(()=>{
        getStockData();
   },[])
    return (
        <>
                  
        </>
    )
}
export default Explore;