/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "articles", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#4a49b9" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
