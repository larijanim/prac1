//https://dog.ceo/api/breeds/list/all
//https://dog.ceo/api/breed/`${breedName}/images/random
//https://dog.ceo/api/breed/hound/images
import { useState,useEffect } from "react";
const Dog=()=>{

    const [data,setData]=useState(null);
    const [selectedOption,setSelectedOption]=useState('');
    const [imgd,setImgd]=useState([])

    const fetchData=async()=>{
        try{
            const response=await fetch('https://dog.ceo/api/breeds/list/all');
            if(!response.ok){
                console.error('sdsds');}
                const result=await response.json();
                const breeds=await result.message;

                const breedNames = Object.keys(breeds);
                const breedsWithSubBreeds = breedNames.reduce((z, breedName) => {
                if (Array.isArray(breeds[breedName]) && breeds[breedName].length>0 ) {
                    const subBreeds = breeds[breedName];
                    subBreeds.forEach((subBreed) => {
                    z.push(`${breedName}/${subBreed}`);
                    });
                } else {
                    z.push(breedName);
                }
                return z;
                }, []);
                setData(breedsWithSubBreeds);

            
        }catch(error){console.error('dfdfd',error)}
       
    }

    const fetchImages = async (item) => {
        try{
             const response = await fetch(`https://dog.ceo/api/breed/${item}/images/random`);
             if(!response.ok)
              {  if (response.status === 404) {setImgd(null);} 
                 setImgd(null);
                throw new Error(`Failed sdsdsdsdsto fetch images: ${response.status} ${response.statusText}`);
                 }
                const data = await response.json();
                setImgd(() => [data.message]);
    } catch (error) {
        console.error('Error fetching images:', error.message);
        // Optionally, you can set imgd to an empty array or handle the error in another way
        setImgd(null);
      }

    }
    useEffect(()=>{
        fetchData();

    },[])
   const handleOptionChange=(event)=>{
    setSelectedOption(event.target.value);
    fetchImages(event.target.value);

   }

    return(
    <div>
        <select value={selectedOption} onChange={handleOptionChange}> 
        {data?.map((i,index)=>(<option key={index} value={i}>{i}</option>))}</select>
        <div>
         {imgd!==null && imgd?.map((d,index) =>(<div key={index}>
            {d?<img src={d}   onError={() =>setImgd(null)}/>:null}</div>)) } </div>
        </div>)
}

export default Dog;