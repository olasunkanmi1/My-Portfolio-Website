import { useState, useEffect } from "react"
import GlobalStyles from "./GlobalStyles";
import { AppStyled } from "./AppStyled";

//components
import { About, Contact, DesktopSidebar, Home, Modal, Navbar, Portfolio, Skills } from "./components";

function App() {
  const [toggle, setToggle] = useState(1);
  const [success, setSuccess] = useState(false)

  const changeTab = (index) => {
    setToggle(index);
  }

  useEffect(() => {
    if(window.innerWidth <= 1024) {
      setToggle(null);
    }
  }, []);
  
  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

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

      { success && <Modal success={success} setSuccess={setSuccess} /> }
    </AppStyled>
  );
}

export default App;
