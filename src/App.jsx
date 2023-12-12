
import "./App.css";
import Github1 from "./Github1";
import Countries from "./Countries";
import Dog from "./Dog";
import GithubNetwork from "./GithubNetwork";
import { BrowserRouter,Routes, Route , Link} from "react-router-dom";


const App = () => {

return (
<div className="App">
<header className="App-header">
<h2>Practice</h2>
</header>
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
        </ul>
      </nav>
<Routes>
<Route path="dog" element={<Dog/>}/>
<Route path="git1" element={<Github1/>}/>
<Route path="countries" element={<Countries/>}/>
<Route path="git2" element={<GithubNetwork/>}/>



</Routes>
</BrowserRouter>

</div>

);
};

export default App;
