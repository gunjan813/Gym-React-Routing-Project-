import React from "react";
import './Hero.css';
import banner from './Images/Background/banner.jpg';
import orange from './Images/Background/orange.jpg';
import stdblog02 from './Images/Background/stdblog02.jpg';

const Hero =  ()=> {
return (
  <section class="container-fluid " >
    <section class="row pt-5 ">
            <div class="col-12 p-0 ">
<div>
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner abc ">
        <div className="carousel-item active ">
          <img src={banner} className="d-block w-100"  />
          <div className="carousel-caption d-none d-md-block">
          <h1 class="hero text-light">SHAPE YOUR BODY</h1>
          <i class="fa-brands fa-instagram me-5 m-3 p-2"></i>
          <i class="fa-brands fa-twitter me-5 m-3 p-2"></i>
          <i class="fa-brands fa-facebook me-5 m-3 p-2"></i>
            
          </div>
        </div>
        
        <div className="carousel-item xyz">
          <img src={orange} className="d-block w-100"  />
          <div className="carousel-caption d-none d-md-block">
          <h6 class="hero text-light">SHAPE YOUR BODY</h6>
          <i class="fa-brands fa-instagram me-5 m-3 p-2"></i>
          <i class="fa-brands fa-twitter me-5 m-3 p-2"></i>
          <i class="fa-brands fa-facebook me-5 m-3 p-2"></i>
           
          </div>
        </div>
        <div className="carousel-item PG">
          <img src={stdblog02} className="d-block w-100 "  />
          <div className="carousel-caption d-none d-md-block">
          <h6 class="hero text-light">SHAPE YOUR BODY</h6>
          <i class="fa-brands fa-instagram me-5 m-3 p-2"></i>
          <i class="fa-brands fa-twitter me-5 m-3 p-2"></i>
          <i class="fa-brands fa-facebook me-5 m-3 p-2"></i>

          </div>
        </div>
      </div>
      
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
    </div>
    </div>
    </section>
    </section>
    );
}
export default Hero;