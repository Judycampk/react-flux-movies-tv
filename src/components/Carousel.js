import React, { useContext } from 'react';
import { Context } from "../store/appContext";

const Carousel = () => {
  const {store} = useContext(Context);

      return (
        <div
          id="carouselExampleCaptions"
          className="carousel slide border-0 position-relative pe-0"
          data-bs-ride="carousel"
        >
          {store.home.map((item, index) =>
            index === 0 ? (
              <div className="carousel-item active" key={item.id}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" + item.backdrop_path
                  }
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
            ) : (
              <div className="carousel-item" key={item.id}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" + item.backdrop_path
                  }
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption position-absolute d-none d-md-block top-50 start-0 translate-middle-y text-start bg-dark bg-opacity-50 mb-5 ps-4">
                <h1 className="ps-4 fw-bold mb-4">{item.title}</h1>
                <p className="ps-4 fw-bold">{item.overview}</p>
                </div>
              </div>
            )
          )}
          {/* <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> */}
        </div>
      );
  }
   
  export default Carousel;