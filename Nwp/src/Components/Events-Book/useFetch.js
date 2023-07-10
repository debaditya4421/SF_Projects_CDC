import { useState , useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        
            fetch('https://mainapi.springfest.in/api/event/get_events', {signal: abortCont.signal})
                .then(res => {
                    // console.log(res);
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted');
                    }
                    else{
                        setIsPending(false);
                        setError(err.message);
                    }                    
                    // console.log(err.message);
                })

        return () => abortCont.abort();
    }, []);

    return { data, isPending, error };
}

export default useFetch;