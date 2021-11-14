import GlobalStyles from "./GlobalStyles";

//components
import { Mobile, Desktop } from "./pages";

function App() {
  return (
    <>
      <GlobalStyles />
      { window.innerWidth <= 768 ? <Mobile /> :  <Desktop />}
    </>
  );
}

export default App;
