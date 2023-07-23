
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Abaut from './views/About';
import Contacts from './views/Contacts';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path= '/' element={<Home/>}></Route>
            <Route path= 'about' element={<Abaut/>}></Route>
            <Route path= 'contact' element={<Contacts/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
