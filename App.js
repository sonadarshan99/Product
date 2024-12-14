
import './App.css';
import Dash from './page/Dash';
import Add from './page/Add';
import Home from './page/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element ={<Home/>}>
        <Route index element ={<Dash/>}/>
        <Route path="/add" element ={<Add/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;