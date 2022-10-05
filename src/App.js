import './App.css';
import Vol from './component/vol';
import HomePage from './component/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Link,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/Vol' element={<Vol/>}/> 
      </Routes>
    </Router>
  );
}



export default App;







