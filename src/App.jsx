
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Landingpage from './pages/Landingpage';
import WatchHistory from './pages/WatchHistory';





function App() {
  return (
    <div className="App">
      <Header/> 
<Routes>

  <Route path='/'element={<Landingpage/>}/>
  <Route path='/Home'element={<Home/>}/>
  <Route path='/WatchHistory' element={<WatchHistory/>}/>
    
</Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
