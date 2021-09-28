import { Link} from "react-router-dom";

const CardPeople = (props) => {
    return (
      <div
        className="card p-0 m-2 bg-transparent border-0 shadow-lg"
        style={{ width: "12rem" }}
      >
        <img src={"https://image.tmdb.org/t/p/w500/" + props.image} />
        <div className="card-body">
          <div className="">
            <Link
              to={"/People/" + props.id}
              className="link-danger"
              style={{ textDecoration: "none" }}
            >
              <h5 className="card-title fs-5 fw-bold">{props.title}</h5>
            </Link>
          </div>
        </div>
      </div>
    );
}
 
export default CardPeople;