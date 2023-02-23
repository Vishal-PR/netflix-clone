import axios from "axios";
import React, { useEffect, useState } from "react";
import request from "../Request";

function Main() {
  const [movies, setMovies] = useState([]);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(request.requestPopular)
      .then((response) => setMovies(response.data.results));
  }, []);

  console.log(randomMovie);

  const truncateString=(str,num) =>{
    if(str?.length > num){
        return str.slice(0,num) + '...';
    }else {
        return str;
    }
  }

  return (
    <div className="w-full h-[500px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[500px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-fill"
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
        />
      </div>

      <div className="absolute top-[200px] p-4 md:p-8">
        <h1 className="text-white text-3xl font-bold md:text-5xl">
          {randomMovie?.title}
        </h1>
        <div className="my-3">
          <button className="border bg-gray-400 text-black border-gray-400 px-4 py-1 hover:bg-white">
            Play
          </button>
          <button className="border text-white border-gray-400 px-4 py-1 ml-4 hover:bg-white hover:text-black">
            Watch Later
          </button>
        </div>
        <p className="text-gray-300 text-sm">Released: {randomMovie?.release_date} </p>
        <p className="w-full md:max-w-[75%] lg:max-w-[50%] xl:max-w-[40%] text-gray-200 my-2">
            {truncateString(randomMovie?.overview,150)}</p>
      </div>
    </div>
  );
}

export default Main;
