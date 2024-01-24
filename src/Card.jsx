import { useState,useEffect} from 'react'


function Card() {

//https://www.deckofcardsapi.com/
  const [idCard,setIdCard]=useState(null)
  const [shuffel,setShuffel]=useState([]);

  const fetchShuffel=async(id,number)=>{
  try{
    const response=await fetch(`https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=${number}`)
    if(response.ok){
      const result=await response.json();
       if(shuffel.length>0){
        setShuffel((prev)=>[...prev, ...result.cards]);
      }else
      {setShuffel( result.cards);}
    }
  }catch(e){console.log(e)}


  }

  const fetchCards=async()=>{
    try{
        const response=await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        if(response.ok){
          const result=await response.json();
            console.log(result);
            setIdCard(result.deck_id)
            fetchShuffel(result.deck_id,7);
            
        }else{
        console.log("error")
        }
    }
      catch(e){console.error(e)}
  }
  
  
useEffect(()=>{
  
  fetchCards();
},[])

 const clickHandler=(id)=>{
  const remainCards=shuffel.filter(card=>card.code!==id);
  setShuffel(remainCards)
 }
 const handleAddCard=()=>{
  fetchShuffel(idCard,1);
 }

  return (
    <>
      <div>
       <button onClick={handleAddCard} disabled={shuffel.length>=7}>Add Card</button>
       {shuffel && shuffel.map((card)=><button key={card.code} onClick={()=>{clickHandler(card.code)}}><img src={card.image}  /></button>)}
      </div>

    </>
  )
}

export default Card
