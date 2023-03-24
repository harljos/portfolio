const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-8">
      <div className="container mx-auto px-16 pt-4 pb-12 text-gray-800">
        <h1 className="text-2xl text-center lg:text-4xl font-bold mb-12">
          Portfolio
        </h1>
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
              Full Plate is a site where users can view and share their each other's recipes.
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
    </section>
  );
}

export default Portfolio;