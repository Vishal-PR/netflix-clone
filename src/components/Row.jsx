import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Movie from "./Movie";

function Row({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-3">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={50}
          className="bg-white rounded-full absolute opacity-50 ml-4 z-10 hover:opacity-100 cursor-pointer hidden group-hover:block "
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          size={50}
          className="bg-white rounded-full absolute  opacity-50 top-14 right-4 z-10 hover:opacity-100 cursor-pointer hidden group-hover:block"
          onClick={slideRight}
        />
      </div>
    </>
  );
}

export default Row;
