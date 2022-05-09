import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './container/Home/Home';
import History from './container/History/History';
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/history" >History</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='home' element={<Home/>}>
        </Route>
        <Route path='/history' element={<History/>}></Route>
      </Routes>

    </Router>
  );
}

export default App;
