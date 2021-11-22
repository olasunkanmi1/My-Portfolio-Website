import { useState, useEffect } from "react"
import GlobalStyles from "./GlobalStyles";
import { AppStyled } from "./AppStyled";

//components
import { About, Contact, DesktopSidebar, Home, Navbar, Portfolio, Skills } from "./components";
import { ReactComponent as Top } from "./assets/icons/top.svg";

function App() {
  const [toggle, setToggle] = useState(1);

  const changeTab = (index) => {
    setToggle(index);
  }

  useEffect(() => {
    if(window.innerWidth <= 1024) {
      setToggle(null);
    }
  }, [])

  return (
    <AppStyled>
      <GlobalStyles />

      <Navbar />

      <div className="view">
        <DesktopSidebar toggle={toggle} changeTab={changeTab} />
        
        <Home toggle={toggle} />
        <About toggle={toggle} />
        <Skills toggle={toggle} />
        <Portfolio toggle={toggle} />
        <Contact toggle={toggle} />
      </div>

      <div className="back-to-top" onclick="scrollToTop();">
        <a href="#home"> <Top /> </a>
      </div>
    </AppStyled>
  );
}

export default App;
