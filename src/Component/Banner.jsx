import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "../Banner.css";
function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchTrending);
      setMovies(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }
    fetchData();
    //if [] , run once  when row loads,don't re run
  }, []);
  //console.log(movies);

  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1)+"....":str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {" "}
      {/*Background Image  */}
      <div className="banner-contents">
        {/*Title */}
        <h1 className="banner-title">{movies?.title || movies?.name || movies?.original_name}</h1>
        {/*Info buttons */}
        <div >
          <button className="banner-button">PLAY</button>
          <button className="banner-button">MY PLAYLIST</button>
        </div>
        {/*decs */}
        <h1 className="banner-description">
            {truncate(movies?.overview,150)}
        </h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}

export default Banner;
