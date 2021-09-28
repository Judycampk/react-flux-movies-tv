import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const MoviesDetails = () => {

    const{id} = useParams ();
    const[moviesDetails,setMoviesDetails]= useState({});

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then((response)=>response.json())
        .then(data=>setMoviesDetails(data));
    },[])   
    console.log(moviesDetails);
    return (
      <div className="card bg-dark text-white">
        <img
          src={
            "https://image.tmdb.org/t/p/original" + moviesDetails.poster_path
          }
          className="card-img opacity-50"
          alt="..."
        />
        <div className="card-img-overlay h-25 bg-dark bg-opacity-75 m-5 pt-5">
          <div className="row">
            <div className="col-6">
              <img
                src={
                  "https://image.tmdb.org/t/p/original" +
                  moviesDetails.backdrop_path
                }
                alt=""
                className="card-img"
              />
            </div>
            <div className="col-6">
              <h5 className="card-title mb-4 mt-2">{moviesDetails.title}</h5>
              <p>{moviesDetails.overview}</p>
              <p className="m-0">Vote</p>
              <p className="text-warning fs-6 fw-bold">{moviesDetails.vote_average}</p>
              <p className="m-0">Date</p>
              <p className="text-warning fs-6 fw-bold mb-4">{moviesDetails.release_date}</p>
              <Link to="/movies"><button type="button" className="btn btn-outline-danger">Volver</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default MoviesDetails;