import { useState} from "react";
const AppleText=()=>{const [countT,setCountT]=useState([''])


const handleChange=(event,index)=>{
const newInput=[...countT];
if(event.target.value ){
newInput[index]=event.target.value;
// if(index===countT.length-1){
//   newInput.push('');
//     }
}else{
 newInput.splice(index,1);
}
setCountT(newInput);
if(event.target.value && index===countT.length-1){
setCountT((prev)=>[...prev,''])
}
}

return (
<div className="app">
{countT && countT.map((item,index)=><div key={index}> <input type='text' value={item} onChange={(event)=>handleChange(event,index)}/></div>)}
</div>
)
}
export default AppleText;