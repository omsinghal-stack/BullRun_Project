import axios from 'axios'
import { useEffect, useState } from 'react';
import Services from './explore_comp/Services.jsx';
import Loading_Spinner from '../components/Loading_Spinner';
<<<<<<< HEAD
import './Explore.css'
=======
import './Explore.css';

>>>>>>> origin/main
const Explore = () => {
    const API = "https://financialmodelingprep.com/api/v3/stock/list?apikey=POx9PiDc9nnBzmbrjUtIVbmvLECjGQ45";
    const API2 = "https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=POx9PiDc9nnBzmbrjUtIVbmvLECjGQ45";
    const [StockData, setStockData] = useState([]);
    const [EtfData, setEtfData] = useState([]);
    const [Trust, setTrust] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [midcap,setMidcap] = useState([]);
    const getStockData = async () => {
        try {
            const res = await axios.get(API);
            const res2 = await axios.get(API2)
            const st_filt = res.data.filter((st) => {
                return st.exchangeShortName === 'NASDAQ' && st.type === 'stock'
            })
            const tru_filt = res.data.filter((st) => {
                return st.exchangeShortName === 'NASDAQ' && st.type === 'trust'
            })
            const etf_filt = res.data.filter((st) => {
                return st.exchangeShortName === 'NASDAQ' && st.type === 'etf'
            })
            const res_stock=[];
            const res_etf=[];
            const res_trust=[];
            
            res2.data.forEach(item2=>{
                const match = st_filt.find(item1=> item1.symbol === item2.symbol);
                const match2 = tru_filt.find(item1=> item1.symbol === item2.symbol);
                const match3 = etf_filt.find(item1=> item1.symbol === item2.symbol);
                if(match){
                    res_stock.push(item2)
                }
                if(match2){
                    res_trust.push(item2);
                }
                if(match3){
                    res_etf.push(item2);
                }


            })
            console.log(res_stock);
            console.log(res_trust);
            console.log(res_etf);
            const top_stocks_descending_merketCap = res_stock.sort((a,b)=>b.marketCap-a.marketCap)
            const top_trusts_descending_merketCap = res_trust.sort((a,b)=>b.marketCap-a.marketCap)
            const top_etfs_descending_merketCap = res_etf.sort((a,b)=> b.marketCap-a.marketCap)
            const top_15_stocks = top_stocks_descending_merketCap.slice(0,15);
            const top_15_trusts = top_trusts_descending_merketCap.slice(0,15);
            const top_15_etfs = top_etfs_descending_merketCap.slice(0,15);
            setStockData(top_15_stocks);
            setEtfData(top_15_etfs);   
            setTrust(top_15_trusts);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        getStockData();
    }, [])
    return (
        <>
            {Loading ?
                <Loading_Spinner />
                :
                <>
                    <Services />
                    <div>
                        {StockData.map((st, index) => (

                            <div className='card' key={index}>
                                <h1>{st.symbol}</h1>
                                <p>{st.name}</p>
                                <h3>${st.price}</h3>
                            </div>
                        ))}
                    </div>
                    <hr/>
                    <div>
                        {EtfData.map((etf,index)=>(
                            <div className='card' key={index}>
                            <h1>{etf.symbol}</h1>
                            <p>{etf.name}</p>
                            <h3>${etf.price}</h3>
                        </div>
                        ))}
                    </div>
                </>


            }

        </>
    )
}
export default Explore;
