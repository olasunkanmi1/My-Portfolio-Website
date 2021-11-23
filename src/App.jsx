import { useState } from "react"
import GlobalStyles from "./GlobalStyles";
import { AppStyled } from "./AppStyled";

//components
import { About, Contact, DesktopSidebar, Home, Navbar, Portfolio, Skills } from "./components";

function App() {
  const [toggle, setToggle] = useState(1);

  const changeTab = (index) => {
    setToggle(index);
  }

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
    </AppStyled>
  );
}

export default App;
