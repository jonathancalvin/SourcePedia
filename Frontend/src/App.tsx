import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './Components/Navbar';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import About from './About/About';
import Main from './Pages/Main';
import Write from './Pages/Write';
import Footer from './Components/Footer';
import { CobaCoba } from './Pages/CobaCoba';
import { Content } from './Pages/Content';
import { User } from './Pages/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/write' element={<Write/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/read/:documentID/:imageID' element={<Content/>}></Route>
          <Route path='/user/:userID' element ={<User/>}></Route>
          <Route path='*' element={"Home"}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;