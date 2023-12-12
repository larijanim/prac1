

import { useState , useEffect } from "react";


// 1. Describe why the code is not working and at least two major problems with this approach.
// 2. Refactor the code so that the userData for the selected user is displayed.
// 3. For your solution to be practical, what does it need to do or not do when interacting with the API (besides error handling)?
// 4. How does using text field input instead of a dropdown change how your solution should interact with the API?

const Github1=()=>{


const [userName, setUserName] = useState("kentcdodds");
 const [userData,setUserData]=useState([]);

// const fetchData = async () => {
//   try{const response = await fetch("https://api.github.com/users/" + userName);
//   const jsonData = await response.json();
//  setData(jsonData)
// }
//    catch(error){
//     console.error('sdfsdfs',error)
//   }

// };

const fetchData = async () => {
 
  try{ if (userName){const response = await fetch("https://api.github.com/users/" + userName);
  const jsonData = await response.json();
 setUserData(jsonData)}
}
   catch(error){
    console.error('sdfsdfs',error)
  }

};

// useEffect(()=>{
//   const dtime=setTimeout(()=>{if(userName.trim()!==''){
//     fetchData();
//     }
//   },500)
  
//   return ()=>clearTimeout(dtime);

// },[userName])

useEffect(() => {
  // Fetch data only when userName is not empty
  if (userName.trim() !== '') {
   // fetchData();
  } else {
    // Clear userData when userName is empty
    setUserData(null);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [userName]);

const handleSubmitClick=()=>{
    
  if(userName.trim()!==''){
    fetchData();
    }
}

return (
<div className="App">
<header className="App-header">
<h2>GitHub User Data</h2>
</header>
{/* <input onChange={event => setUserName(event.target.value)} /> */}
<input type='text'
id="users"
value={userName}
onChange={(event) => setUserName(event.target.value)}
/>
{/* <option value="kentcdodds">Kent C. Dodds</option>
<option value="gaearon">Dan Abramov</option> */}
<button onClick={handleSubmitClick}>submit</button>
<div className="user-container">
{userData!==null && userData?.name!=='undefined' && <h5 className="info-item">{userData.name}</h5>}
{/* <h5 className="info-item">{userData.location}</h5>
<h5 className="info-item">{userData.blog}</h5>
<h5 className="info-item">{userData.company}</h5> */}
</div>
</div>
);
};

export default Github1;