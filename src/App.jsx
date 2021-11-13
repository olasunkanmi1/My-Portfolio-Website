import './App.css';
import GlobalStyles from './GlobalStyles';

//components
import { Navbar, Home, About, Skills, Portfolio, Contact }from './components'

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
