import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <span className="text-4xs mr-2">Connect with me:</span>
          <a href="https://www.linkedin.com/in/joseph-harley-5a6015267/">
            <FaLinkedin className="text-2xl mr-2 hover:text-gray-500" />
          </a>
          <a href="https://github.com/harljos">
            <FaGithub className="text-2xl hover:text-gray-500" />
          </a>
          <a href="mailto:joseph.harley02@gmail.com">
            <FaEnvelope className="text-2xl hover:text-gray-500" />
          </a>
        </div>
        <div>
          <span className="text-4xs">
            &copy; {new Date().getFullYear()} Joseph Harley
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
