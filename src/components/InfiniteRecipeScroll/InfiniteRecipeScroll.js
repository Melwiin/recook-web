import React, {useCallback, useEffect, useRef, useState} from "react";
import axios from "axios";

function useCarSearch(pageNumber) {
    const [cars, setCars] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        let cancel;
        setLoading(true);
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/cars',
            params: { page: pageNumber, size: 10},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then( res => {
            setCars(prevCars => ([...prevCars, res.data.map(c => [c.carModel])]));
            console.log(cars);
            setHasMore(res.data.length);
            setLoading(false);
        }).catch(e => {
            if(axios.isCancel(e)) return
        })
        return () => cancel()
    }, [pageNumber])
    return { cars, hasMore, loading}
}

function InfiniteRecipeScroll() {

    const [pageNumber, setPageNumber] = useState(0);
    useCarSearch(pageNumber);

    const {
        cars,
        hasMore,
        loading
    } = useCarSearch(pageNumber);

    const observer = useRef();
    const lastElementRef = useCallback(node => {
        if(loading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setPageNumber(prevState => prevState+1);
            }
        })
        if(node) observer.current.observe(node);
    }, [loading, hasMore]);

    return (
        <>

            <div>
                {cars.map((car, index) => {
                    if(cars.length === index + 1) {
                        return <div ref={lastElementRef} key={index}>{car}</div>
                    }else {
                        return <div key={index}>{car}</div>
                    }
                })}
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>{loading && 'Loading...'}</div>
            </div>
        </>

    );
}

export default InfiniteRecipeScroll;