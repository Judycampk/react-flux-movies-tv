import { Context } from "../store/appContext";
import React, {useContext} from "react";
import CardPeople from "../components/CardPeople";

const People = () => {

    const {store} = useContext(Context);

    return (
      <div className="container-fluid ps-5 d-flex gradiente2">
        <div className="row">
          {store.people.map((item) => (
            <CardPeople
              key={item.id}
              title={item.name}
              image={item.profile_path}
              id={item.id}
            />
          ))}
        </div>
      </div>
    );
}
 
export default People;