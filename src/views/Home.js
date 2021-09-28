import React from "react";
import Carousel from "../components/Carousel";
import Trending from "./Trending";
import Upcoming from "./Upcoming";


const Home = () => {
    return ( 
        <div className="row gradient">
        <div className="container-fluid ps-0 pe-0 border-0 row">
            <Carousel/>
          </div>
          <div className="container border-0 mt-5 mb-5 ms-4 upcoming" >
            <h1 className="text-danger fw-bold">
              Upcoming-Movies
            </h1>
            <Upcoming/>
          </div>
          <div className="container-fluid border-0 mt-5 mb-5 ms-4 trending">
            <h2 className="text-danger fw-bold">
              Trending
            </h2>
            <Trending/>
          </div>
        </div>
     );
}
 
export default Home; 