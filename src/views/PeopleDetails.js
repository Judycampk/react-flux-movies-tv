import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const PeopleDetails = () => {

    const{id} = useParams ();
    const[peopleDetails,setPeopleDetails]= useState({});
    console.log(peopleDetails);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then((response)=>response.json())
        .then(data=>setPeopleDetails(data));
    },[])  

    return ( 

        <div class="card bg-dark text-white">
        <img
          src={
            "https://image.tmdb.org/t/p/original" + peopleDetails.profile_path
          }
          className="card-img opacity-25"
          alt="..."
        />
        <div class="card-img-overlay h-75 bg-dark bg-opacity-75 m-5">
          <div className="row">
            <div className="col-6">
              <img
                src={
                  "https://image.tmdb.org/t/p/original" +
                  peopleDetails.profile_path
                }
                alt=""
                className="card-img"
              />
            </div>
            <div className="col-6">
              <h5 className="card-title mb-4 mt-2">{peopleDetails.name}</h5>
              <p>Biography</p>
              <p className="card-text">{peopleDetails.biography}</p>
              <p className="m-0">Place</p>
              <p className="text-warning">{peopleDetails.place_of_birth}</p>
              <p className="m-0">Birthday</p>
              <p className="text-warning">{peopleDetails.birthday}</p>
              <Link to="/people"><button type="button" className="btn btn-outline-danger mt-5">Volver</button></Link>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default PeopleDetails;