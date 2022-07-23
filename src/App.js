import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Better from './components/Better';
import Home from './components/Home';
import './App.css';
import Video from './components/Video';
import Bhome from './components/Bhome';
import Whitebox from './components/Whitebox';
import MobileNav from './components/MobileNav';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MobileNav/>
      <Home/>
      <Whitebox />
      <Bhome/>
      <Video/>
      <Better/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
