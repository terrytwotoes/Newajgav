import React from "react";
import Slider from "react-slick";
import "./Collage.css";
import collage1 from "../../Assets/collage_1.jpg";
import collage2 from "../../Assets/collage_2.jpg";
import collage3 from "../../Assets/collage_3.jpg";

export default function Collagediv(props) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
  };

  return (
    <div className="grid-wrapper">
      <div className="grid-collage-wrapper">
        <div className="grid-collage-item-wrapper grid-collage-item-1">
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={collage1}
            alt="NA"
          />
        </div>
        <div className="grid-collage-item-wrapper grid-collage-item-2">
          <img
            style={{ height: "auto", width: "100%", objectFit: "cover" }}
            src={collage2}
            alt="NA"
          />
        </div>
        <div className="grid-collage-item-wrapper grid-collage-item-3">
          <img
            style={{ height: "auto", width: "100%", objectFit: "cover" }}
            src={collage3}
            alt="NA"
          />
        </div>
      </div>

      <div className="grid-about-us-wrapper">
        <div className="grid-about-us-heading">
          <h1> Mission and Vision</h1>
        </div>
        <div className="grid-about-us-content">
          <h4 className="grid-about-us-content-subheading">
            Warm Greetings from Ajgav Projects Management & Services Pvt. Ltd.
          </h4>
          <h5 className="grid-about-us-content-para">
          We are here to facilitate cost effective, timely and beneficial solutions through our services catering to
project management, HR solutions and tourism.
We aim to promote and work on the solutions for clean energy and make it more accessible and
beneficial for all. We aspire to be a trusted ally of our customers for their HR needs. And we wish to
provide tourism options that are customized to the requirement of our clients and also sustainable,
promising comfortable and memorable experiences to the customers while encouraging development
of local resources, culture, and heritage.
          </h5>
        </div>
      </div>

      {/* Testimonial */}

      <div>
        <h1 style={{ color: "white" }}> Testimonials</h1>
        <Slider {...settings} className="grid-testimonial-wrapper">
          <div>
            <h1>Testimonial 1</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              iste, saepe cumque eum a mollitia adipisci quo ducimus, error
              eveniet veniam unde ut. Quibusdam voluptas assumenda adipisci,
              similique aperiam laboriosam! Placeat provident distinctio ea
              facere quia similique eligendi, fugiat magni earum asperiores,
              natus eaque repudiandae corporis blanditiis nesciunt commodi?
              Deserunt.
            </p>
          </div>
          <div>
            <h1>Testimonial 2</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              iste, saepe cumque eum a mollitia adipisci quo ducimus, error
              eveniet veniam unde ut. Quibusdam voluptas assumenda adipisci,
              similique aperiam laboriosam! Placeat provident distinctio ea
              facere quia similique eligendi, fugiat magni earum asperiores,
              natus eaque repudiandae corporis blanditiis nesciunt commodi?
              Deserunt.
            </p>
          </div>
          <div>
            <h1>Testimonial 3</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              iste, saepe cumque eum a mollitia adipisci quo ducimus, error
              eveniet veniam unde ut. Quibusdam voluptas assumenda adipisci,
              similique aperiam laboriosam! Placeat provident distinctio ea
              facere quia similique eligendi, fugiat magni earum asperiores,
              natus eaque repudiandae corporis blanditiis nesciunt commodi?
              Deserunt.
            </p>
          </div>
          <div>
            <h1>Testimonial 4</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              iste, saepe cumque eum a mollitia adipisci quo ducimus, error
              eveniet veniam unde ut. Quibusdam voluptas assumenda adipisci,
              similique aperiam laboriosam! Placeat provident distinctio ea
              facere quia similique eligendi, fugiat magni earum asperiores,
              natus eaque repudiandae corporis blanditiis nesciunt commodi?
              Deserunt.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
