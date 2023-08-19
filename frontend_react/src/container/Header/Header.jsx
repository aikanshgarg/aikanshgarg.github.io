import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Intro from "../Intro/Intro";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { IoIosRefresh } from "react-icons/io";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  // logic to open modal(intro)
  const [isOpen, setIsOpen] = useState(false);

  // logic to change image and text using refreshIcon
  const imagesArray = [
    {
      src: images.profile1,
      text: (
        <>
          JavaScript Evangelist.
          <br />
          CSS Connoisseur.
        </>
      ),
    },
    {
      src: images.profileIndia,
      text: (
        <>
          Based in India: Vibrant <br />
          hub of IT Talent!
        </>
      ),
    },
    {
      src: images.profileComfy,
      text: (
        <>
          Comfortable hoodies <br /> for coding!
        </>
      ),
    },
    {
      src: images.profileDate,
      text: "That's me all sassed up for team outings!",
    },
    {
      src: images.profileCricket,
      text: (
        <>
          Fitness Enthusiast. <br /> Fervent M.S. Dhoni Fan.
        </>
      ),
    },
    {
      src: images.profileFunky,
      text: (
        <>
          Funky outfit - <br /> not for client meetings!
        </>
      ),
    },
  ];

  const [imagesLoaded, setImagesLoaded] = useState(
    Array(imagesArray.length).fill(false)
  );
  const allImagesLoaded = imagesLoaded.every((loaded) => loaded);

  useEffect(() => {
    const loadImage = (index) => {
      const img = new Image();
      img.src = imagesArray[index].src;
      img.onload = () => {
        setImagesLoaded((prevImagesLoaded) => {
          const updatedImagesLoaded = [...prevImagesLoaded];
          updatedImagesLoaded[index] = true;
          return updatedImagesLoaded;
        });
      };
    };

    // Load images one by one
    imagesArray.forEach((_, index) => {
      loadImage(index);
    });
  }, []); // Empty dependency array ensures the effect runs only once

  const [imageIndex, setImageIndex] = useState(0);

  const refreshImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
  };

  // logic to switch image on hover over icons
  const smilingImage = () => {
    const img = document.getElementById("profile3dImg");
    img.src = images.profile2;
  };
  const switchBackExistingImage = () => {
    const img = document.getElementById("profile3dImg");
    img.src = imagesArray[imageIndex].src;
  };

  return (
    <>
      {isOpen && <Intro setIsOpen={setIsOpen} />}

      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div
              className="badge-cmp app__flex"
              onMouseOver={smilingImage}
              onMouseOut={switchBackExistingImage}
            >
              <span className="wave">👋🏼</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text p-text-v2">Hi, my name is</p>
                <h1 className="head-text text-left head-text-dark">Aikansh.</h1>
                <p className="p-text p-text-v2">
                  <b>I build things for the web.</b>
                </p>
              </div>
            </div>

            <div className="tag-cmp app__flex" style={{ position: "relative" }}>
              {allImagesLoaded && (
                <IoIosRefresh className="refreshIcon" onClick={refreshImage} />
              )}
              <p className="p-text">{imagesArray[imageIndex].text}</p>
            </div>

            <div className="overview-circle">
              <div
                href="#"
                className="link"
                onClick={() => setIsOpen(true)}
                onMouseOver={smilingImage}
                onMouseOut={switchBackExistingImage}
              >
                <svg
                  viewBox="0 0 200 200"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="link__svg"
                  aria-labelledby="link1-title link1-desc"
                >
                  <title id="link1-title">Quick Overview & Resume</title>
                  <desc id="link1-desc">
                    A rotating link which provides info about me
                  </desc>
                  <path
                    id="link-circle"
                    className="link__path"
                    d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                    stroke="none"
                    fill="none"
                  />
                  <path
                    className="link__arrow"
                    d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"
                    fill="none"
                  />
                  <text className="link__text">
                    <textPath href="#link-circle" stroke="none">
                      Quick Overview & Resume
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img
            src={imagesArray[imageIndex].src}
            alt="profile_bg"
            id="profile3dImg"
          />

          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.react, images.javascript, images.sass].map(
            (circle, index) => (
              <div
                className="circle-cmp app__flex"
                key={`circle-${index}`}
                onMouseOver={smilingImage}
                onMouseOut={switchBackExistingImage}
              >
                <img src={circle} alt="profile_bg" />
              </div>
            )
          )}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Header, "home");
// export default Header;
