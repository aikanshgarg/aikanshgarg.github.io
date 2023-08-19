// import React, { useState } from "react";
// import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { motion } from "framer-motion";

// import { images } from "../../constants";
// import "./Navbar.scss";

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={images.logo} alt="logo" />
//       </div>
//       <ul className="app__navbar-links">
//         {["home", "articles", "work", "skills", "contact"].map((item) => (
//           <li className="app__flex p-text" key={`link-${item}`}>
//             <div />
//             <a href={`#${item}`}>{item}</a>
//           </li>
//         ))}
//       </ul>

//       <a
//         href="https://drive.google.com/file/d/1jySoBnt6KtASUveoH3WdFYJQw_IndNjH/view"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="p-text p-text-v2 resumeBtn"
//       >
//         RESUME
//       </a>

//       <div className="app__navbar-menu">
//         <HiMenuAlt4 onClick={() => setToggle(true)} />

//         {toggle && (
//           <motion.div
//             whileInView={{ x: [300, 0] }}
//             transition={{ duration: 0.85, ease: "easeOut" }}
//             style={{ backgroundColor: "#150c21", color: "#fff" }}
//           >
//             <HiX onClick={() => setToggle(false)} />
//             <ul>
//               {["home", "articles", "work", "skills", "contact"].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item}`} onClick={() => setToggle(false)}>
//                     {item}
//                   </a>
//                 </li>
//               ))}

//               <a
//                 href="https://drive.google.com/file/d/1jySoBnt6KtASUveoH3WdFYJQw_IndNjH/view"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="resumeBtn resumeMobile"
//               >
//                 RESUME
//               </a>
//             </ul>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "articles", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <a
        href="https://drive.google.com/file/d/1jySoBnt6KtASUveoH3WdFYJQw_IndNjH/view"
        target="_blank"
        rel="noopener noreferrer"
        className="p-text p-text-v2 resumeBtn"
      >
        RESUME
      </a>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={toggleMobileMenu} />

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              style={{ backgroundColor: "#150c21", color: "#fff" }}
            >
              <HiX onClick={toggleMobileMenu} />
              <ul>
                {["home", "articles", "work", "skills", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={toggleMobileMenu}>
                        {item}
                      </a>
                    </li>
                  )
                )}
                <a
                  href="https://drive.google.com/file/d/1jySoBnt6KtASUveoH3WdFYJQw_IndNjH/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resumeBtn resumeMobile"
                >
                  RESUME
                </a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
