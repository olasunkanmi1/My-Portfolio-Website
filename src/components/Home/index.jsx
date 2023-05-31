import { useEffect, useRef } from "react";
import { HomeStyled } from "./Styled";
import me from "../../assets/me.webp";
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
      className={`content ${toggle === 1 ? "active-content" : ""}`}
    >
      <h1>Olasunkanmi Abdulsalam</h1>
      <div className="typing" ref={textRef} />

      <div className="wrap">

        <div className="info">
          <p>
            Hello 👋🏽, I'm a highly motivated Frontend Developer with a strong enthusiasm for transforming ideas into captivating web experiences.
          </p>

          <div className="animation">
            <div className="line line-left" />
            <a
              href="mailto:olasunkanmiaq@gmail.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Hire Me
            </a>
            <div className="line line-right" />
          </div>
        </div>

        <div className="image-container" data-aos="zoom-in">
          <div className="img">
            <img src={me} alt="DP" />
          </div>
        </div>
      </div>
      <div id="home" className='tag' />
    </HomeStyled>
  );
};

export default Home;
