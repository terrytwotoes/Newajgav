import React from "react";
import emailjs from "emailjs-com";

export default function GrievancesForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_so54zm8",
        "template_lk4i7wt",
        e.target,
        "user_eY0qlIyq52lBAIAYc7tHK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container">
      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Company Name"
              name="company-name"
              required
            />
          </div>
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Services Taken"
              name="services-taken"
              required
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              type="text"
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Complaint/Reason for Dissatisfaction"
              name="complaint"
              required
            ></textarea>
          </div>
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Project Name"
              name="project-name"
              required
            />
          </div>
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Project Location"
              name="project-location"
              required
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email ID"
              name="email"
              required
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              pattern="[789][0-9]{9}"
              placeholder="Contact No"
              name="contact-no"
              title="Phone No must be of 10 digits"
              required
            />
          </div>
          <div className="col-8 form-group mx-auto">
            <input
              type="submit"
              className="btn btn-info"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
