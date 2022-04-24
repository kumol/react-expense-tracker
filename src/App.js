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
    <Home/>
      // <Router>
      // <nav>
      //     <ul>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/monthly">History</Link>
      //       </li>
      //       <li>
      //         <Link to="/expense">expense</Link>
      //       </li>
      //     </ul>
      // </nav>
      //   <div>
      //   <Routes>
      //     <Route path="/expense">
      //       <Home />
      //     </Route>
      //     <Route path="/monthly">
      //       <History />
      //     </Route>
      //     <Route path="/">
      //       <Home />
      //     </Route>
      //   </Routes>
      //   </div>
      // </Router>
  );
}

export default App;
