import "./Footer.css";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="slab-footer">
      <p className="copy">Copyright © 2022</p>
      <div>
        <a
          className="git-icon"
          href="https://github.com/Andy-J-Smith/devCodeCamp_Capstone_AS"
        >
          <BsGithub />
        </a>
        <p>GitHub</p>
      </div>
    </footer>
  );
};

export default Footer;
