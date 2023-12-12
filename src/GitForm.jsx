import { useState,useEffect } from "react";
import GitCard from "./GitCard";
import './App.css'
const GitForm=()=>{ 
    const [param,setParam]=useState('');
    const [data,setData]=useState(null);
    const [folo,setFolo]=useState(null);
    const [fclick,setFclick]=useState(false);

   const fetchdata=async(qry)=>{try{
    const response=await fetch(`https://api.github.com/users/${qry}`);
    if (!response.ok){throw new Error(`Failed sdsdsdsdsto fetch images: ${response.status} ${response.statusText}`);}
    const result=await response.json();
    setData(result);
    setFolo(null);

   }catch(error){
       console.error('message',error);
   }

   }
   const fetchfolo=async(qry)=>{try{
    const response=await fetch(`https://api.github.com/users/${qry}/followers`);
    if (!response.ok){throw new Error(`Failed sdsdsdsdsto fetch images: ${response.status} ${response.statusText}`);}
    const result=await response.json();
    const x=result?.map((i)=>( {login:i.login,avatar_url:i.avatar_url , followers_url:i.followers_url} ))
    console.log('fffff',x);
    setFolo(x);

   }catch(error){
       console.error('message',error);
   }

   }



    const onInputChange=(event)=>{
          setParam(event.target.value);
    }
    const onButtonClick=(event)=>{
        event.preventDefault(); // Prevent the default form submissio
        console.log(param);
        fetchdata(param);
   
    }

    const handleFollowers = async() => {
        if (!fclick){
        if (data?.login) {
           fetchfolo(data?.login);
        
        } else {
          setFolo(null);
        }
      }};

      const handleFollowerDivClick = (follower) => {
       setFclick(true);
        setParam(follower.login);
        setFolo(null);
        }
        useEffect(()=>{
            setFolo(null);
            fetchdata(param);
            setFolo(null);
            setFclick(false);
        },[fclick])

    return(
    <div><form>
        <input value={param} onChange={onInputChange}/><button type='submit' onClick={onButtonClick}>search</button></form>
      <GitCard data={data} handleFollowers={handleFollowers} />
       
        { folo!==null && folo?.map((item,index)=>(<div className="folocontainer" key={index} onClick={() => handleFollowerDivClick(item)}> 
            <GitCard data={item} handleFollowers={handleFollowers} /></div>))}
        </div>)}
export default GitForm;