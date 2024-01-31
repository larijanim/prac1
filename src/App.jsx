
import "./App.css";
import Github1 from "./Github1";
import Countries from "./Countries";
import Dog from "./Dog";
import GithubNetwork from "./GithubNetwork";
import { BrowserRouter,Routes, Route , Link} from "react-router-dom";
import Rating from './Rating';
import AmazonProducts from "./AmazonProducts";
import AppleText from "./AppleText";
import AwsServices from "./AwsServices";
import Counter from "./Counter";
import ProgressBar from "./ProgressBar";
import { useState , useEffect} from 'react';
import TransferList from "./TransferList";
import TempConvertore from "./TempConvertore";
import Drawing from "./Drawing";
import { lazy, Suspense } from 'react';
import SearchD from './SearchD';
import ContextAPISample from "./ContextAPISample";

//import Card from "./Card";
const LazyCard = lazy(() => import('./Card'));
//import Gl from "./Gl";
const App = () => {

  const [progressValue, setProgressValue] = useState(50); // Initial value

  const handleSliderChange = (event) => {
    setProgressValue(event.target.value); // Update state when slider changes
  };
  const [TabsWrapper, setTabsWrapper] = useState(null);
/* example of dynamic */
useEffect(() => {
  const loadTabsWrapper = async () => {
    // Import the TabsWrapper component dynamically
    const module = await import('./TabsWrapper');
    // Set the imported component to the state
    setTabsWrapper(() => module.default);
  };

  // Call the dynamic import function
  loadTabsWrapper();
}, []);


return (
<div className="App">
<header className="App-header">
<h2>Practice</h2>
</header>
<ContextAPISample/>
<SearchD/>
<Drawing/>
{TabsWrapper ? <TabsWrapper /> : <p>Loading...</p>}
<Rating/>
<TempConvertore/>
<label>
        <div>Control progress</div>
        <input
          type="range"
          min="0"
          max="100"
           value={progressValue} 
           onChange={handleSliderChange}
          id="slider" />
      </label>
         <ProgressBar value={progressValue}  />
<Counter/>

<BrowserRouter>
<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/card">Card</Link>
          </li>
          <li>
            <Link to="/dog">Dogs</Link>
          </li>
          <li>
            <Link to="/git1">GitHub</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
          <li>
            <Link to="/git2">GitHub Network</Link>
          </li>
          <li><Link to="/appleText">Apple Text</Link></li>
          <li><Link to="/amazonproduct" >Amazon Products</Link></li>
          <li><Link to="/aws">AWS Services</Link></li>
          <li><Link to="/transferlist">Transfer List</Link></li>
        </ul>
      </nav>
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
  <Route path="card" element={<LazyCard />}/>
  <Route path="dog" element={<Dog/>}/>
  <Route path="git1" element={<Github1/>}/>
  <Route path="countries" element={<Countries/>}/>
  <Route path="git2" element={<GithubNetwork/>}/>
  <Route path="appleText" element={<AppleText/>}/>
  <Route path="amazonproduct" element ={<AmazonProducts />}/>
  <Route path="aws" element={<AwsServices/>}/>
  <Route path="transferlist" element={<TransferList/>}/>
  </Routes>
</Suspense>
</BrowserRouter>

</div>

);
};

export default App;
