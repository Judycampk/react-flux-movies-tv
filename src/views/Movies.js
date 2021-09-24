import { Context } from "../store/appContext";
import React,{useEffect,useContext} from "react";
import CardMovies from "../components/CardMovies";

const Movies = () => {
    const{store,actions} = useContext(Context);

    useEffect(()=>{
        actions.loadMovies();
    },[]);
    
    return ( 
        <div>
            {store.movies.map((item)=>{
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