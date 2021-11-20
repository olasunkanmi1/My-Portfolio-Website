import { useEffect, useRef } from "react";
import { HomeStyled } from "./Styled";
import me from "../../assets/me.jpeg";
import { init } from "ityped";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = ({ toggle }) => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      strings: ["Frontend Developer 💻"],
      typeSpeed: 80,
      backSpeed: 50,
      showCursor: false,
      loop: false,
    });
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      offset: 50,
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

        <div className="image-container" data-aos="zoom-in">
          <div className="img">
            <img src={me} alt="DP" />
          </div>
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;
