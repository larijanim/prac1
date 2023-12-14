import React from 'react'

import  {FaStar} from 'react-icons/fa';
import { useState } from 'react';



function Rating() {
    const [curRate,setCurRate]=useState(null)
    const [hover,setHover]=useState(null);
    return (
        <div>
              {[...Array(5)].map((star,index)=>{ const currentRate=index+1;
                return (
                <label>
                <input 
                 style={{display:'none'}}
                key={index}
                type="radio"
                name="rating"
                value={currentRate}
                onClick={()=>setCurRate(currentRate)}
                />
                <FaStar 
                color={currentRate<=(hover || curRate)?"#ffc107":"#e4e5e9"}
                onMouseEnter={()=>setHover(currentRate)}
                onMouseLeave={()=>setHover(null)}
                
                size={20}/>
              </label>
              );})}
             
          </div>
      );
}

export default Rating