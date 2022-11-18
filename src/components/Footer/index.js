import { BsArrowRight } from "react-icons/bs"
import Button from "../Buttons";

import "./index.css";

import Lines from "../../assets/lines.png";

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-image-container">
        <img
        src={Lines}
        alt="lines in footer"
        className="footer-image"
      />
        </div>
      

      <div className="button-wrapper">
        <Button type="explore" text="Explore more" EndIcon={() => <BsArrowRight className="end-icon" />} />
      </div>
    </div>
  );
};

export default Footer;
