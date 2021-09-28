import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import palomitas from "./Img/palomitas.png";

const Navbar = () => {

  const { store, actions } = useContext(Context);

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-4 text-danger ms-5">
            Home
          </Link>
          <img src={palomitas} width="80px" alt=""  />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link to="/movies" className="nav-link active ms-5 me-5 text-danger" aria-current="page">
                  Movies
              </Link>
              <Link to="/shows" className="nav-link active ms-5 me-5 text-danger" aria-current="page">
                  TV Shows
              </Link>
              <Link to="/people" className="nav-link ms-5 text-danger">
                People
              </Link>
            </div>
          </div>
        </div>
        <div className="dropdown dropleft">
				<button
					className="btn dropdown-toggle btn-outline-info"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					{store.favourites.length + ` Favourites`}
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favourites.map((item, index) => {
						return (
							<Link key={index} className="dropdown-item" to="/">
								{item}{" "}
								<button
									className="btn"
									onClick={() => {
										actions.removFav(item);
									}}>
									<FontAwesomeIcon icon={faTrashAlt} />
								</button>
							</Link>
						);
					})}
				</div>
			</div>
      </nav>
    );
}
 
export default Navbar;