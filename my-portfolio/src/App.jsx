import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 min-h-screen font-sans transition-colors duration-300">
      <ScrollProgress />
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
