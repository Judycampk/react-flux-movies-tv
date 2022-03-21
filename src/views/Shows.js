import { Context } from "../store/appContext";
import React, {useContext} from "react";
import CardShows from "../components/CardShows";

const Shows = () => {

    const {store} = useContext(Context);
    
    return (
      <div>
        <div className="container-fluid foto d-flex">
          <div className="ms-5 ps-5">
            <div className="row">
              {store.shows.map((item) => (
                <CardShows
                  key={item.id}
                  title={item.original_name}
                  image={item.poster_path}
                  vote={item.vote_average}
                  date={item.first_air_date}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Shows;