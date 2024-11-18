import axios from 'axios'
import { useEffect, useState } from 'react';
import Services from './explore_comp/Services.jsx';
import Loading_Spinner from '../components/Loading_Spinner';
// import Dedicated from './explore_comp/Dedicated.jsx'
const Explore = () => {
    const API = "https://financialmodelingprep.com/api/v3/stock/list?apikey=7tb1GX4qTBrrwWjhi0m97bdp2AVJES4g";
    const [StockData, setStockData] = useState([]);
    const [EtfData, setEtfData] = useState([]);
    const [Trust, setTrust] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [midcap,setMidcap] = useState([]);
    const getStockData = async () => {
        try {
            const res = await axios.get(API);

            const st_filt = res.data.filter((st) => {
                return st.exchangeShortName === 'NASDAQ' && st.type === 'stock'
            })
            const tru_filt = res.data.filter((st) => {
                return st.exchangeShortName === 'NASDAQ' && st.type === 'trust'
            })
            const etf_filt = res.data.filter((st) => {
                return st.exchangeShortName === 'NASDAQ' && st.type === 'etf'
            })
            
            setStockData(st_filt);
            setEtfData(etf_filt);
            setTrust(tru_filt);
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
                                <h3>{st.price}</h3>
                            </div>
                        ))}
                    </div>
                </>


            }

        </>
    )
}
export default Explore;