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
          <h1>Mr. Bhuvanesh Pandey, Indore</h1>
          <p>
          Thanks to the tourism department of Ajgav, who made our north east tour memorable and unique in many ways. Not only the comfort and ease of travel was taken care of but also the choice of locations was amazing. They listen to our requirements carefully and suggest the best. Thank you guys and keep up the great work.
          </p>
        </div>
        <div>
          <h1>J Singh and Family, Jamshedpur</h1>
          <p>
          Loved the superb darjeeling trip managed by Ajgav... The packages are just not the readymade kind but individually planned for travellers taking care of their concerns, comfort and most importantly interest. Thank you folks.  
          </p>
        </div>
        <div>
          <h1>Sunil sharma, MD, SS contracts</h1>
          <p>
          The best attribute of Team Ajgav is their promptness in attending to customer's concerns and their ability to come up with required solutions in any given situation. We wish them very best for their upcoming endeavours and look  forward to collaborate with team Ajgav in the future projects.

          </p>
        </div>
        <div>
          <h1>JP Kaushik, Ashirwad Carbonics India Pvt Ltd</h1>
          <p>
          Despite being a new startup, Ajgav has shown quality professionalism in projects. They have taken up the challenges forefront and effectively proved their mettle. Glad to have them as our promoters of our products in Vietnam & Malaysia. 
          </p>
        </div>
      </Slider>
    </>
  );
}
