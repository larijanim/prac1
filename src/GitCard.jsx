


const GitCard=(props )=>{
    
    const {data , handleFollowers}=props    

    

    
    
    
    return(

<div style={{margine:'auto',width:800,padding:'1em'}}><p>{data?.login}</p><p>{data?.created_at}</p>
      <img src={data?.avatar_url}/>
      <button onClick={()=>handleFollowers()} >find myfollowers</button></div>

)}
export default GitCard;