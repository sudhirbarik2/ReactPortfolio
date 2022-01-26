import logo from './logo.svg';
import './App.css';
import './css/base.css';
import './css/main.css';
import './css/vendor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/vendor.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Credintials from './components/Credintials';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Stats from './components/Stats';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Credintials/>
      <Portfolio/>
     
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
