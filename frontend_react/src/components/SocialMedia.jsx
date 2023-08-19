import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/aikansh-garg/"
      target="_blank"
      rel="noreferrer"
    >
      <BsLinkedin />
    </a>
    <a href="https://github.com/aikanshgarg/" target="_blank" rel="noreferrer">
      <BsGithub />
    </a>
    <a href="https://wa.link/kgyp4s" target="_blank" rel="noreferrer">
      <BsWhatsapp />
    </a>
  </div>
);

export default SocialMedia;
