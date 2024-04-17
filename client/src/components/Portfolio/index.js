const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-8">
      <div className="container mx-auto px-16 pt-4 pb-12 text-gray-800">
        <h1 className="text-2xl text-center lg:text-4xl font-bold mb-12">
          Portfolio
        </h1>
        {/* Full Plate project */}
        <div className="mb-12">
          <h2 className="text-2xl text-center lg:text-3xl font-bold mb-4">
            Gymplanr
          </h2>
          <div className="flex flex-wrap mb-4 justify-center">
            <div className="w-full md:w-1/2">
              <p className="text-md lg:text-lg mb-4">
              A lot of people want to get into fitness, but they aren't sure where to start. I know when I first started my fitness journey there was so much information I had to learn. How to structure a workout, what exercises hit which muscles, how many sets and reps do I do. The list goes on and on, so I built gymplanr to streamline the process to generate a full workout plan based on what you're looking for with no prior knowledge about fitness.
              </p>
              <p className="text-md lg:text-lg mb-4">
                Technologies Used: Go, PostgreSQL, Cobra, Bcrypt
              </p>
              <div className="flex mb-4 justify-center">
                <a
                  href="https://github.com/harljos/gymplanr"
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
