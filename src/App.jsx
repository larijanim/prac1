
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
//import Gl from "./Gl";
const App = () => {


return (
<div className="App">
<header className="App-header">
<h2>Practice</h2>
</header>
<Rating/>


<BrowserRouter>
<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
        </ul>
      </nav>
<Routes>
<Route path="dog" element={<Dog/>}/>
<Route path="git1" element={<Github1/>}/>
<Route path="countries" element={<Countries/>}/>
<Route path="git2" element={<GithubNetwork/>}/>
<Route path="appleText" element={<AppleText/>}/>
<Route path="amazonproduct" element ={<AmazonProducts />}/>
<Route path="aws" element={<AwsServices/>}/>



</Routes>
</BrowserRouter>

</div>

);
};

export default App;
