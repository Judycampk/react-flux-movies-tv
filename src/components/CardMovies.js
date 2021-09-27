import React from "react";
import { Link} from "react-router-dom";

const CardMovies = (props) => {


    return (
      <div
        className="card p-0 m-2 bg-transparent border-0 shadow-lg gray"
        style={{ width: "13rem" }}
      >
        <img src={"https://image.tmdb.org/t/p/original/" + props.image} />
        <div className="card-body">
          <Link
            to={"/movies/" + props.title}
            className="link-danger"
            style={{ textDecoration: "none" }}
          >
            <h5 className="card-title fs-5 fw-bold">HOLA</h5>
          </Link>
        </div>
      </div>
    );
}
 
export default CardMovies;