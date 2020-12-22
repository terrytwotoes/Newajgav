import React from "react";
import Slider from "react-slick";
// import "./Testimonial.css";

export default function TestimonialDivWrapper() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <>
 
      <h1> Testimonials</h1>
      <Slider
        {...settings}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "auto",
          width: "auto",
        }}
      >
        <div >
          <h1>Testimonial 1</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            iste, saepe cumque eum a mollitia adipisci quo ducimus, error
            eveniet veniam unde ut. Quibusdam voluptas assumenda adipisci,
            similique aperiam laboriosam! Placeat provident distinctio ea facere
            quia similique eligendi, fugiat magni earum asperiores, natus eaque
            repudiandae corporis blanditiis nesciunt commodi? Deserunt.
          </p>
        </div>
        <div>
          <h1>Testimonial 2</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            iste, saepe cumque eum a mollitia adipisci quo ducimus, error
            eveniet veniam unde ut. Quibusdam voluptas assumenda adipisci,
            similique aperiam laboriosam! Placeat provident distinctio ea facere
            quia similique eligendi, fugiat magni earum asperiores, natus eaque
            repudiandae corporis blanditiis nesciunt commodi? Deserunt.
          </p>
        </div>
        <div>
          <h1>Testimonial 3</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            iste, saepe cumque eum a mollitia adipisci quo ducimus, error
            eveniet veniam unde ut. Quibusdam voluptas assumenda adipisci,
            similique aperiam laboriosam! Placeat provident distinctio ea facere
            quia similique eligendi, fugiat magni earum asperiores, natus eaque
            repudiandae corporis blanditiis nesciunt commodi? Deserunt.
          </p>
        </div>
        <div>
          <h1>Testimonial 4</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            iste, saepe cumque eum a mollitia adipisci quo ducimus, error
            eveniet veniam unde ut. Quibusdam voluptas assumenda adipisci,
            similique aperiam laboriosam! Placeat provident distinctio ea facere
            quia similique eligendi, fugiat magni earum asperiores, natus eaque
            repudiandae corporis blanditiis nesciunt commodi? Deserunt.
          </p>
        </div>
      </Slider>
    </>
  );
}
