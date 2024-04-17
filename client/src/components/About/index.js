import TechStack from "../TechStack";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Tooltip } from "react-tippy";

const AboutMe = () => {
  return (
    <section id="about" className="py-8">
      <div className="container mx-auto px-16 pt-4 pb-12 text-gray-800">
        {/* heading */}
        <h1 className="text-2xl text-center lg:text-4xl font-bold mb-4">
          Joseph Harley
        </h1>
        <div className="flex items-center justify-center">
          <img
            className="h-36 w-36 rounded-full object-cover"
            src="./images/profile.png"
            alt="Profile"
          />
        </div>
        <h1 className="text-2xl text-center lg:text-4xl font-bold mb-8">
          Full-Stack Developer
        </h1>
        {/* links to socials */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/harljos">
            <Tooltip title="Github">
              <FaGithub className="w-6 h-6 text-gray-600 hover:text-gray-800" />
            </Tooltip>
          </a>
          <a href="https://www.linkedin.com/in/joseph-harley-5a6015267/">
            <Tooltip title="LinkedIn">
              <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-gray-800" />
            </Tooltip>
          </a>
          <a href="mailto:joseph.harley02@gmail.com">
            <Tooltip title="Email">
              <FaEnvelope className="w-6 h-6 text-gray-600 hover:text-gray-800" />
            </Tooltip>
          </a>
        </div>
        {/* about me section */}
        <h1 className="text-2xl text-center lg:text-4xl font-bold mb-4 mt-4">
          About Me
        </h1>
        <p className="text-md lg:text-lg mb-4">
          Ever since my switch to Go, I have been loving building projects like my own “gymplanr”, where I spent most of my time working on it, and had a pleasant time while doing it. I used to focus primarily on front-end using JavaScript and React/Next.js but, I just cannot go back after using Go. I am currently looking for an entry backend developer role, ideally in Go.
        </p>
        <p className="text-md lg:text-lg mb-4">
          I have graduated from a coding bootcamp where I have collaborated on several projects that where I learned teamwork, effective communication, and collobaration. These experiences have strengthened my ability to manage projects efficiently, work in teams.
        </p>
        {/* tech stack */}
        <TechStack />
      </div>
    </section>
  );
}

export default AboutMe;
