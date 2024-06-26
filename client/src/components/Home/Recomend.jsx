// importing from installed packages
import React, { useState } from "react";
import MoreMedia from "../MoreMedia";

// movie page
const Recommend = () => {
  // initial page numbers
  const [pageNumbers, setPageNumbers] = useState([2, 3, 4, 5]);

  // Function to fetch next page data
  const fetchNextPage = () => {
    setPageNumbers((prevPageNumbers) => [
      ...prevPageNumbers,
      pageNumbers[pageNumbers.length - 1] + 1,
    ]);
  };

  // css style
  const containerStyle = "p-4 mt-2 flex flex-col gap-6";
  const headingStyle = "text-2xl md:text-4xl ";

  // Render Movie media
  return (
    <div className={containerStyle}>
      <h1 className={headingStyle}>Recommended for you</h1>
      {pageNumbers.map((currentPage, index) => (
        <MoreMedia
          key={index}
          currentPage={currentPage}
          mediaType={"trending"}
        />
      ))}
      <button
        onClick={fetchNextPage}
        className="px-6 py-3 mb-10 bg-red-700 text-white font-semibold rounded-lg hover:bg-white hover:text-black  transition duration-300"
      >
        Load More
      </button>
    </div>
  );
};

export default Recommend;
