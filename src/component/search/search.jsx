import { useEffect, useRef, useState } from "react";
import "./search.css"
function Search({onSearch}) {

    
    const bgnde = useRef();
    const endde = useRef();

    useEffect( ()=>{
        const today =new Date().toISOString().slice(0, 10);
        endde.current.value = today;
    }, [])

    const searchHandle = (event) =>{
        event.preventDefault();
        
        onSearch(
            bgnde.current.value.replaceAll("-",""), 
            endde.current.value.replaceAll("-","")
            );

    };

    return (<div className="search">
        <form onSubmit={searchHandle} className="search-form">
            <input type="date" ref={bgnde} />
            <span> ~ </span>
            <input type="date" ref={endde} />
            <button type="submit">🍳</button>
        </form>
    </div>);
}

export default Search;