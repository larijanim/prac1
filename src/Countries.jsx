//https://restcountries.com/v3.1/all
import { useState, useEffect } from "react";
import CountryDetail from './CountryDetail'
const Countries=()=>{

    const [data,setData]=useState(null);
    const [curr,setCurr]=useState(null);
    const [show,setShow]=useState(Array(300).fill(false));  //we do not need to have array, it was just for check
    const [page,setPage]=useState(1);
    const PAGE_SIZE=10;
    const totalPages = data? Math.ceil(data.length / PAGE_SIZE):0;

     // Handle changing the current page
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

    const paginationControls = (
        <div>
          <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <span> Page {page} of {totalPages} </span>
          <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
            Next
          </button>
        </div>
      );


const fetchdata=async()=>{
    try{
        const response=await fetch('https://restcountries.com/v3.1/all');
        const result=await response.json();
        console.log(result);
        const dataObj=result.map((r)=>{return {name:r.name.common,flag:r.flags.png,region:r.region}})
        setData(dataObj);
       
    }
    catch(error){
   console.error('wdasscasca',error)
    }
}
    useEffect(()=>{

    fetchdata();


    },[]);
    const startindex=(page-1)*PAGE_SIZE
    const endindex=startindex+PAGE_SIZE
    const  curPageData=data?.slice(startindex,endindex);

   const handleDetailClick=(currindex)=>{
    setCurr(currindex);
 //if we want search reult to have details and make an object to call for another component, we can return a component
 //we do filter to have that record
 setShow(prev=>{
    const  newx=[...prev];
    newx[currindex]=!newx[currindex]
return newx;});
  
  //if I want to keep track for every detail button, i should have an array for show and check what is the lastsate for that record
}

// const Detail=(z)=>{ console.log(z); return(<div>{z.country.name}</div>)}

return(<div>
        {paginationControls}
  
  {curPageData?.map((c ,index)=>(<div key={index}><span>{c.name}</span>
 <img src={c.flag}/>
  <span>{c.region}</span><button onClick={()=>handleDetailClick(index)}>detail</button>{show[index] && curr==index && <CountryDetail country={c} />}</div>))}



</div>)

}
export default Countries;