import { useEffect, useState } from "react";

function Quotes (){
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        fetch('https://api.kanye.rest/')
            .then(response => response.json())
            .then(data => {
                setQuote(data.quote);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return(
        <div id="quotes">
            <q>{quote}</q>
        </div>
    )
}

export default Quotes
