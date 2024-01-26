import UseDebounce from "./UseDebounce";
import { useState,useEffect } from "react";

const SearchD=()=>{
    const [param, setParam]=useState('')
    const paramDebounced=UseDebounce(param,3000)
    
    useEffect(()=>{
        search(paramDebounced)
    },[paramDebounced])
    
    const search=(param1)=>{
        console.log(param1)
    }
    const handleSearch=(e)=>{
        setParam(e.target.value)
    }
    return(<>
    <input type='text'value={param} onChange={handleSearch}/>
</>)}
 export default SearchD;
