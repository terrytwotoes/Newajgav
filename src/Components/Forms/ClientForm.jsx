import React from "react";
import emailjs from "emailjs-com";

export default function ClientForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d0h8wkf",
        "template_2jowojb",
        e.target,
        "user_plZuU9KoCrMRKU6po6ixR"
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
              placeholder="Project Name"
              name="project-name"
              required
            />
          </div>
          <div className="col-8 form-group mx-auto">
            <label for="commencement date">Project Date:</label>
            <br/>
            <input
              type="date"
              id="commencement date"
              className="form-control"
              name="project-date"
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
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Project Estimate"
              name="project-estimate"
            />
          </div>
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Serivces Interested In"
              name="services-interested"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              type="text"
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Comment/Concern(s)"
              name="comment"
              required
            ></textarea>
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              pattern="[789][0-9]{9}"
              className="contact-no"
              placeholder="Contact No"
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
              className="form-control"
              placeholder="Contact Person Name"
              name="contact-person-name"
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
