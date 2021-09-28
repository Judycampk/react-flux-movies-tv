import { Link} from "react-router-dom";
import React, {useContext} from 'react';
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const CardPeople = (props) => {
  const { store, actions } = useContext(Context);
    return (
      <div
        className="card p-0 ms-3 bg-transparent border-0 shadow-lg"
        style={{ width: "14rem" }}
      >
        <img src={"https://image.tmdb.org/t/p/w500/" + props.image} />
        <div className="card-body">
          <div className="">
            <Link
              to={"/people/" + props.id}
              className="link-danger"
              style={{ textDecoration: "none" }}
            >
              <h5 className="card-title fs-5 fw-bold">{props.title}</h5>
            </Link>
            <button type="button" className="btn btn-outline-info" onClick={() => {
								actions.addFav();
							}}><FontAwesomeIcon icon={faHeart} /></button>
          </div>
        </div>
      </div>
    );
}
 
export default CardPeople;