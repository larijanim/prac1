


const GitCard=({data , handleFollowers} )=>{
    
    
    
    

    
    
    
    return(

<div><p>{data?.login}</p><p>{data?.created_at}</p>
      <img src={data?.avatar_url}/>
      <button onClick={()=>handleFollowers()} >find myfollowers</button></div>

)}
export default GitCard;