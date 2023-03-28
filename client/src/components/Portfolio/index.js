const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-8">
      <div className="container mx-auto px-16 pt-4 pb-12 text-gray-800">
        <h1 className="text-2xl text-center lg:text-4xl font-bold mb-12">
          Portfolio
        </h1>
        {/* Full Plate project */}
        <div className="mb-12">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            Full Plate
          </h1>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 md:pr-4">
              <img
                className="h-full w-full object-cover"
                src="./images/fullplate.png"
                alt="Project Screenshot"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-md lg:text-lg mb-4">
              Full Plate is a recipe-sharing website that I worked on as part of a group project with 3 other developers in a week. It features recipe uploads and viewing. I gained valuable experience in full-stack development and project management through this project
              </p>
              <p className="text-md lg:text-lg mb-4">
                Technologies Used: React, GraphQL, MongoDB, Express, Node
              </p>
              <div className="flex mb-4">
                <a
                  href="https://secure-dawn-49208.herokuapp.com/"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/Bmoore4452/Full-Plate"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* My medi project */}
        <div className="mb-12">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            My Medi
          </h1>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 md:pr-4">
              <img
                className="h-full w-full object-cover"
                src="./images/fullplate.png"
                alt="Project Screenshot"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-md lg:text-lg mb-4">
              My Medi is a team project to help users keep track of perscriptions and medical information.
              </p>
              <p className="text-md lg:text-lg mb-4">
                Technologies Used: Handlebars, mySQL, Express, Node, Bootstrap
              </p>
              <div className="flex mb-4">
                <a
                  href=""
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Visit Website
                </a>
                <a
                  href=""
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
