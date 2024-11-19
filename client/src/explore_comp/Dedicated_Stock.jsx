import { useState,useEffect } from "react";
import axios from 'axios';

const Dedicated_Stock = ()=>{
    const API = "https://financialmodelingprep.com/api/v3/stock/list?apikey=7tb1GX4qTBrrwWjhi0m97bdp2AVJES4g";
    const API2 = "https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=7tb1GX4qTBrrwWjhi0m97bdp2AVJES4g";
    const [Mid_Cap, setMidCapData] = useState([]);
    const [Lar_Cap, setLarCapData] = useState([]);
    const [Sma_Cap, setSmaCapData] = useState([]);
   
    const getStockData=async()=>{
         const res = await axios.get(API);
         const res2 = await axios.get(API2);
         const st_filt = res.data.filter((st)=>{
            return st.exchangeShortName === 'NASDAQ' && st.type === 'stock'
         })
         const res_stock =[];
         res2.data.forEach(item2=>{
            const match = st_filt.find(item1=> item1.symbol===item2.symbol);
            if(match){
                res_stock.push(item2);
            } 
        })
        // console.log(res_stock);
        const lar = [];
        const small = [];
        const mid = [];
        res_stock.forEach(it=>{
            if(it.marketCap<2000000000){
                small.push(it);
            }
            else if(it.marketCap>=2000000000 && it.marketCap<10000000000){
                mid.push(it);
            }
            else if(it.marketCap>=10000000000){
                lar.push(it);
            }
            else{}
        })
        // console.log(small);
        // console.log(mid);
        // console.log(lar);
        
        setSmaCapData(small);
        setMidCapData(mid);
        setLarCapData(lar);

    }
    useEffect(()=>{
        getStockData();
    },[])
    return (
        <>
        

        </>
    )
}
export default Dedicated_Stock;