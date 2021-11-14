import { useState } from "react"
import { DesktopStyled } from "./Styled"
import DesktopSidebar from '../../components/DesktopSidebar'
import { About, Contact, Home, Portfolio, Skills } from "../../components";

const Desktop = () => {
    const [toggle, setToggle] = useState(1);

    const changeTab = (index) => {
        setToggle(index);
    }

    return (
        <DesktopStyled>
           <DesktopSidebar toggle={toggle} changeTab={changeTab} />
           
           <Home toggle={toggle} />
           <About toggle={toggle} />
           <Skills toggle={toggle} />
           <Portfolio toggle={toggle} />
           <Contact toggle={toggle} />
        </DesktopStyled>
    )
}

export default Desktop
