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
          <h1> Welcome!</h1>
        </div>
        <div className="grid-about-us-content">
        <h4 className="grid-about-us-content-subheading">
            Warm Greetings from Ajgav Projects Management & Services Pvt. Ltd.
          </h4>
          <h5 className="grid-about-us-content-para">
          We are here to provide efficient planning and Management for setting up small scale power/industrial projects, 
          Human Resources Management and Customised Tours.  We offer complete Project management services including vendor 
          management, planning, supply & quality management, Resources allocation, HR planning, and Construction Management.
          Our specialized team proffers customized solutions for vendor development, recruitment and training services, and travel planning as per requirements through cost-effective execution ensuring time-bound performance. We provide expert consultation regarding project viability, scope, opportunity, and assessment of the latitudes to slash the risks involved and aerate the possibilities.
We welcome you to explore our work domains.
          </h5>
        </div>
      </div>

      {/* Testimonial */}

      <div>
        <h1 style={{ color: "white" }}> Testimonials</h1>
        <Slider {...settings} className="grid-testimonial-wrapper">
        <div >
          <p>
          Thanks to the tourism department of Ajgav, who made our north east tour memorable and unique in many ways. Not only the comfort and ease of travel was taken care of but also the choice of locations was amazing. They listen to our requirements carefully and suggest the best. Thank you guys and keep up the great work.
          </p>
          <h2> - Mr. Bhuvanesh Pandey, Indore</h2>
        </div>
        <div>
          <p>
          Loved the superb darjeeling trip managed by Ajgav... The packages are just not the readymade kind but individually planned for travellers taking care of their concerns, comfort and most importantly interest. Thank you folks.  
          </p>
          <h2> - Mr. J Singh and Family, Jamshedpur</h2>
        </div>
        <div>
          <p>
          The best attribute of Team Ajgav is their promptness in attending to customer's concerns and their ability to come up with required solutions in any given situation. We wish them very best for their upcoming endeavours and look  forward to collaborate with team Ajgav in the future projects.

          </p>
          <h2> - Mr. Sunil sharma, MD, SS contracts</h2>
        </div>
        <div>
          <p>
          Despite being a new startup, Ajgav has shown quality professionalism in projects. They have taken up the challenges forefront and effectively proved their mettle. Glad to have them as our promoters of our products in Vietnam & Malaysia. 
          </p>
          <h2> - Mr. JP Kaushik, Ashirwad Carbonics India Pvt Ltd</h2>
        </div>
        </Slider>
      </div>
    </div>
  );
}
