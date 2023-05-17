import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full md:h-64 lg:h-[600px]"
        >
          <img
            src="https://i.ibb.co/3mwqP6z/Mommy-Jag-Banner-BT-Backline2.jpg"
            className="w-full md:h-64 lg:h-[600px]"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-red-500">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full md:h-64 lg:h-[600px]"
        >
          <img
            src="https://i.ibb.co/QMJLqyS/banner-02-2000x.webp"
            className="w-full md:h-64 lg:h-[600px] "
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-red-500">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full md:h-64  lg:h-[600px]"
        >
          <img
           src="https://i.ibb.co/Y21kjNb/sol-73909-hotwheels-plp-banner-sm-203256.jpg"
            className="w-full md:h-64  lg:h-[600px]"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle  bg-red-500">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full md:h-64  lg:h-[600px]"
        >
          <img
            src="https://i.ibb.co/JBC5Xx1/banner-2.jpg"
            className="w-full md:h-64  lg:h-[600px]"
          />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle  bg-red-500">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
