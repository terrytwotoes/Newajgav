import React from "react";
import emailjs from "emailjs-com";

export default function QueryForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_gvtdpgk",
        e.target,
        "user_Y2TfupNZ6YoTW6mKwqszu"
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
              minLength="2"
              maxLength="20"
              name="name"
              required
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Comapany Name"
              name="company-name"
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
              placeholder="Query"
              name="query"
              required
            ></textarea>
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
              className="contact-no"
              placeholder="Contact No"
              title="Contact number must be 10 digits long"
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
