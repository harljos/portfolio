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
          Hello, I am a coding bootcamp graduate and thrilled to enter the world of software engineering. My proficiency in MongoDB, Express, React, Node, and mySQL enables me to develop full-stack applications that cater to user needs and provide seamless experiences.
        </p>
        <p className="text-md lg:text-lg mb-4">
          During my time in the bootcamp, I collaborated on several projects that instilled in me the value of teamwork, effective communication, and agile methodologies. These experiences have strengthened my ability to manage projects efficiently, work in diverse teams, and deliver quality results.
        </p>
        <p className="text-md lg:text-lg mb-4">
          I am committed to constantly improving my skills and keeping up-to-date with emerging technologies and best practices. I am excited to bring my passion for software engineering and eagerness to learn to a team that fosters creativity, innovation, and personal growth.
        </p>
        <p className="text-md lg:text-lg mb-4">
          I am open to new opportunities and would love to hear from you. Please feel free to browse my portfolio and contact me for any inquiries or collaboration proposals.
        </p>
        {/* tech stack */}
        <TechStack />
      </div>
    </section>
  );
}

export default AboutMe;
