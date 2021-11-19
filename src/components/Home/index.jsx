import { useEffect, useRef } from "react";
import { HomeStyled } from "./Styled";
import me from "../../assets/me.jpeg";
import { init } from "ityped";
const Home = ({ toggle }) => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      strings: ["Frontend Developer"],
      typeSpeed: 80,
      backSpeed: 50,
      showCursor: false,
      loop: false,
    });
  }, []);

  return (
    <HomeStyled
      id="home"
      className={toggle === 1 ? "content active-content" : "content"}
    >
      <h1>Olasunkanmi Abdulsalam</h1>
      <div className="typing" ref={textRef} />

      <div className="wrap">
        <div className="info">
          <p>
            Hello 👋🏽, I'm an Enthusiastic Frontend Developer who is passionate
            about bringing ideas to live in the browser.
          </p>

          <div className="animation">
            <div class="line line-left"></div>
            <a
              href="mailto:olasunkanmiaq@gmail.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Hire Me
            </a>
            <div class="line line-right"></div>
          </div>
        </div>

        <div className="image-container">
          <div className="img">
            <img src={me} alt="DP" />
          </div>
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;
