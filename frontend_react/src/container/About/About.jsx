import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// import { images } from "../../constants";
import { urlFor, client } from "../../client";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./About.scss";

// const blogs = [
//   {
//     title: "Web Development",
//     description: "I am a good web developer.",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Web Development",
//     description: "I am a good web developer.",
//     imgUrl: images.about02,
//   },
// ];

const About = () => {
  const [blogs, setBlogs] = useState([]);

  // running useEffect only once when the component loads
  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <>
      <p className="head-text head-text-small">Featured articles</p>
      <h2 className="head-text head-text-dark">chronicles from my journey</h2>

      <div className="app__profiles">
        {blogs.map((blog, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={blog.title + index}
          >
            <img src={urlFor(blog.imgUrl)} alt={blog.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {blog.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {blog.description}
            </p>
            <a
              href={blog.projectLink}
              target="_blank"
              rel="noreferrer"
              className="p-text p-text-v2"
              style={{ textDecoration: "none", paddingTop: "10px" }}
            >
              Read more...
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default About;
export default AppWrap(
  MotionWrap(About, "app__about"),
  "articles",
  "app__whitebg"
);
