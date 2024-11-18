import { useEffect, useState } from "react";

const Dedicated = ({ StockData }) => {
    const [St_data, setSt_data] = useState([]);
    const [Loading, setLoading] = useState(true);

    const stockRender = () => {
        try {
            // Ensure StockData is an array before setting it
            if (Array.isArray(StockData)) {
                setSt_data(StockData);  // Set the stock data if valid
            } else {
                console.error("StockData is not an array");
            }
            setLoading(false);  // Set loading to false once the data is processed
        } catch (err) {
            console.log(err);  // Log any errors
            setLoading(false);
        }
    };

    useEffect(() => {
        
        stockRender();  // Run the stock render function whenever StockData changes
    }, [StockData]);

    return (
        <>
            {Loading ? (
                <p>This is loading...</p>
            ) : (
                <>
                    {/* Make sure St_data is an array before calling .map() */}
                    {Array.isArray(St_data) && St_data.length > 0 ? (
                        St_data.map((st, index) => (
                            <h1 key={index}>{st.symbol}</h1>
                        ))
                    ) : (
                        <p>No data available</p>  // Show a message if St_data is empty or invalid
                    )}
                </>
            )}
        </>
    );
};

export default Dedicated;
