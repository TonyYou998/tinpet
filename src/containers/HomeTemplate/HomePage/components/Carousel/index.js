import React from "react";

export default function Carousel() {
  return (
    <section className="carousel__container">
      <video  autoPlay muted loop className=" video  ">
        <source src="./video/tinpet.mp4" />
      </video>
      
    </section>
  );
}
