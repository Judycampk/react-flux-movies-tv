import { Context } from "../store/appContext";
import React,{useContext} from "react";
import CardMovies from "../components/CardMovies";

const Movies = () => {

    const{store} = useContext(Context);

    return ( 
        <div>
            {store.home.map((item)=>{
                <CardMovies
                key={item.id}
                title={item.original_title}
                image={item.poster_path}
                id={item.id}/>
            })}
        </div>
     );
}

export default Movies;