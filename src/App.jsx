import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Router ><Navbar />
    <Routes>
      <Route path='/' ></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
