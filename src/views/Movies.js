import { Context } from "../store/appContext";
import React, {useContext} from "react";
import CardMovies from "../components/CardMovies";

const Movies = () => {

    const {store} = useContext(Context);
    return ( 
        <div className="container-fluid kenburns-top">
            <div className="d-flex ms-5 ps-5">
                <div className="row">
            {store.home.map((item)=>
                <CardMovies
                key={item.id}
                title={item.original_title}
                image={item.poster_path}
                id={item.id}/>
            )}
                </div>
            </div>
        </div>
     );
}

export default Movies;