import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './container/Home/Home';
import History from './container/History/History';
function App() {
  return (
    <Router>
      <nav>
        <ul className='nav-ul'>
          <li className='navblock'>
            <NavLink className="nav-li" to="/home" >Home</NavLink>
          </li>
          <li className='navblock'>
            <NavLink className="nav-li" to="/about" >About</NavLink>
          </li>
          <li className='navblock'>
            <NavLink className="nav-li" to="/history" >History</NavLink>
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
