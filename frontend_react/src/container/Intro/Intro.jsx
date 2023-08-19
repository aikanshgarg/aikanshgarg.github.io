import React from "react";

import { images } from "../../constants";
import { BsLinkedin, BsGithub, BsWhatsapp, BsVectorPen } from "react-icons/bs";

import "./Intro.scss";

// reference => https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc

const Intro = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />

      <div className="modal">
        <div
          className="modal-close-row hide-desktop"
          style={{ width: "100%", padding: "1rem 2rem 0" }}
        >
          <h3 className="p-text-v2">About Me</h3>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            &times;
          </button>
        </div>
        <div className="left-side">
          <img src={images.profileMe} alt="aikansh garg closeup pic" />
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/aikansh-garg/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/aikanshgarg/"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a href="https://wa.link/kgyp4s" target="_blank" rel="noreferrer">
              <BsWhatsapp />
            </a>
            <a
              href="https://dev-dive.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <BsVectorPen />
            </a>
          </div>
        </div>

        <div className="modal-text">
          <div className="modal-close-row hide-mobile">
            <h3 className="p-text-v2">About Me</h3>
            <button className="closeBtn" onClick={() => setIsOpen(false)}>
              &times;
            </button>
          </div>
          <p>
            A frontend developer by{" "}
            <span className="highlighted">profession</span>, designer by{" "}
            <span className="highlighted">passion</span>.
          </p>
          <p>
            I'm a man with a <span className="highlighted">growth-mindset</span>{" "}
            who loves to share, collaborate, and ultimately expand my knowledge
            on anything. I value compassion, honesty, and a positive attitude
            towards life. I may be a{" "}
            <span className="highlighted">relative beginner</span> in the realms
            of programming and life's wild rollercoaster, but hey,{" "}
            <i style={{ fontSize: "0.9rem" }}>
              <b>
                I've got a bag full of technical and social skills that AI
                hasn't been able to replace (yet)!
              </b>
            </i>{" "}
          </p>
          <p>
            If you're interested in a comprehensive overview of my education,
            work history, and technical expertise, feel free to take a look at
            my <span className="highlighted">resume</span> - open{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1nSwjNuQU59f_wwpHWb-BipKG9jMVKRhB/view"
              className="modal-links"
            >
              this
            </a>{" "}
            if you don't mind some colors, else go for the basic version{" "}
            <a
              href="https://drive.google.com/file/d/1jySoBnt6KtASUveoH3WdFYJQw_IndNjH/view"
              rel="noreferrer"
              target="_blank"
              className="modal-links"
            >
              here
            </a>
            .
          </p>
          <p>
            Got ideas bubbling in your mind? Questions popping like confetti?
            Feedback bursting with excitement? Or just want to share your
            favorite color (no judgment, even if it's glittery unicorn rainbow)?
            Don't hold back, let's{" "}
            <a
              href="#contact"
              className="modal-links"
              onClick={() => setIsOpen(false)}
            >
              connect!
            </a>{" "}
            🍻
          </p>
        </div>
      </div>
    </>
  );
};

// this export is not letting modal work
// export default AppWrap(
//   MotionWrap(Intro, "app__intro"),
//   "intro",
//   "app__whitebg"
// );

export default Intro;
