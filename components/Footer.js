import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="text-sm md:text-lg uppercase pt-2">
        ©2024 Jeff Hampton
      </div>
      <div className="flex gap-4 lg:gap-6">
        <a
          href="mailto:jeffreylawhampton@gmail.com"
          title="Email"
          className="footer-link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.instagram.com/hampton_jeff/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
          className="footer-link"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/jeffreylawhampton/"
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
          className="footer-link"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
