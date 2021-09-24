import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState,useEffect} from 'react';


const Demo = () => {

  const[caro,setCaro] = useState([]);
  console.log(caro);

  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
      .then(response => response.json())
      .then(data => setCaro(data.results));
  },[])

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
    return ( 
      <Slider {...config}>
      {caro.map((x, i) => {
        return <div className="card text-white border-0">
        <img
          src={"https://image.tmdb.org/t/p/original" + x.backdrop_path}
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay d-flex justify-content-start align-items-end">
        <div classname="card-title">{x.title}</div>
        </div>
      </div>
      })}
    </Slider>
     )
};
 
export default Demo; 

