import { SiMongodb, SiPostgresql, SiExpress, SiNodedotjs, SiGo, SiTypescript, SiJavascript, SiDocker, SiReact } from "react-icons/si";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const TechStack = () => {
  return (
    <section className="py-8">
        <h2 className="text-2xl text-center font-bold mb-4">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center items-center">
            <Tooltip title="Go Promming Language">
                <SiGo className="text-6xl text-blue-500 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="JavaScript">
                <SiJavascript className="text-6xl text-yellow-500 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="TypeScript">
                <SiTypescript className="text-6xl text-blue-500 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="Docker">
                <SiDocker className="text-6xl text-blue-600 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="PostgreSQL">
                <SiPostgresql className="text-6xl text-blue-500 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="MongoDB">
                <SiMongodb className="text-6xl text-green-500 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="Express">
                <SiExpress className="text-6xl text-black mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="Node.js">
                <SiNodedotjs className="text-6xl text-green-600 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
            <Tooltip title="React">
                <SiReact className="text-6xl text-blue-400 mx-6 my-4 hover:text-gray-500" />
            </Tooltip>
        </div>
    </section>
  );
}

export default TechStack;
