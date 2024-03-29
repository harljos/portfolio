import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiNodedotjs, SiTailwindcss, SiGraphql } from "react-icons/si";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const TechStack = () => {
  return (
    <section className="py-8">
        <h2 className="text-2xl text-center font-bold mb-4">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center items-center">
            <Tooltip title="HTML">
                <FaHtml5 className="text-6xl text-orange-500 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="CSS">
                <FaCss3 className="text-6xl text-blue-500 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="JavaScript">
                <FaJs className="text-6xl text-yellow-500 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="React">
                <FaReact className="text-6xl text-blue-400 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="MongoDB">
                <SiMongodb className="text-6xl text-green-500 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="MySQL">
                <SiMysql className="text-6xl text-blue-900 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="Express">
                <SiExpress className="text-6xl text-black mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="GraphQL">
                <SiGraphql className="text-6xl text-pink-500 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="Node.js">
                <SiNodedotjs className="text-6xl text-green-600 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="Tailwind CSS">
                <SiTailwindcss className="text-6xl text-blue-400 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="Bootstrap">
                <FaBootstrap className="text-6xl text-purple-600 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
        </div>
    </section>
  );
}

export default TechStack;
