import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const TvDetails = () => {

    const{id} = useParams ();
    const[TvDetails,setTvDetails]= useState({});

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then((response)=>response.json())
        .then(data=>setTvDetails(data));
    },[]);

    return (
        <div className="card bg-dark text-white">
        <img
          src={
            "https://image.tmdb.org/t/p/original" + TvDetails.poster_path
          }
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay h-25 bg-dark bg-opacity-75 m-5 pt-5">
          <div className="row">
            <div className="col-6">
              <img
                src={
                  "https://image.tmdb.org/t/p/original" +
                  TvDetails.backdrop_path
                }
                alt=""
                className="card-img"
              />
            </div>
            <div className="col-6">
              <h5 className="card-title mb-4 mt-2">{TvDetails.original_name}</h5>
              <p className="card-text">{TvDetails.overview}</p>
              <p className="m-0">Vote</p>
              <p className="card-text text-warning fs-6 fw-bold">{TvDetails.vote_average}</p>
              <Link to="/shows"><button type="button" className="btn btn-outline-danger">Volver</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default TvDetails;