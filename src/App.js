import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App bg-[#0a192f]">
      <Navbar />
      <Home />
      <Work />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
