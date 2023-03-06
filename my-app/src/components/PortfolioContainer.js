import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        else if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        // else if (currentPage === "Contact") {
        //     return <Contact />;
        // }
        // else {
        //     return <Resume />;
        // }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
    )

}

export default PortfolioContainer;