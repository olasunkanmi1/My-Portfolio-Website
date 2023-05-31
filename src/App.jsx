import { useState, useRef } from "react"
import Aos from "aos";
import GlobalStyles from "./GlobalStyles";
import { AppStyled } from "./AppStyled";
import "aos/dist/aos.css";

//components
import { About, Contact, DesktopSidebar, Home, Modal, Navbar, Portfolio, Skills } from "./components";

function App() {
  const [toggle, setToggle] = useState(1);
  const [modal, setModal] = useState(false);
  const viewRef = useRef(null);

  Aos.init({
    duration: 1000, 
    offset: 50,
  });

  const changeTab = (index) => {
    setToggle(index);
    viewRef.current.scrollTop = 0 //back to top
  }

  return (
    <div onClick={() => setModal(false)}>
      <AppStyled>
        <GlobalStyles />
        <Navbar />
        <DesktopSidebar toggle={toggle} changeTab={changeTab} />
        <Modal modal={modal} setModal={setModal} />

        <div className="view" ref={viewRef}>
            <Home toggle={toggle} />
            <About toggle={toggle} />
            <Skills toggle={toggle} />
            <Portfolio toggle={toggle} />
            <Contact toggle={toggle} setModal={setModal} />
        </div>

      </AppStyled>
    </div>
  );
}

export default App;
