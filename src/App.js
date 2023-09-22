//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import CategoryMovie from './pages/CategoryMovies';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/common/Header';
import { routePath } from './constants/routes';
function App() {
  return (
    <Router>
    
     <Routes>
     <Route path={routePath.home} element={<Home />} />
     <Route path={routePath.categories} element={<CategoryMovie />} />
     </Routes>
    </Router>
  );
}

export default App;
