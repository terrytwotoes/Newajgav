import React from "react";
import emailjs from "emailjs-com";
import './FormStyles.css';

export default function TourismForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_65sm3oq",
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
        <div className="row">
          <div className="col-25">
            <label htmlFor="destination">Destination</label>
          </div>
          <div className="col-75">
            <select name="destination" id="destination">
              <option value="NE">NE</option>
              <option value="royal-rajputana">Royal Rajputana</option>
              <option value="hindi-heartland">Hindi Heartland</option>
              <option value="hindi-heartland">Bhutan</option>

            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="priorities">Priorities</label>
          </div>
          <div className="col-75">
            <textarea
              type="text"
              id="priorities"
              cols="30"
              rows="8"
              placeholder="Your Priorities..."
              name="priorities"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="Budget">Budget</label>
          </div>
          <div className="col-75">
            <input
              type="number"
              placeholder="Approx"
              name="Budget"
              id="Budget"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="number-of-travelers">Number of Travelers</label>
          </div>
          <div className="col-75">
            <input
              type="number"
              name="number-of-travelers"
              id='number-of-travelers'
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="number-of-days">Number of Tour days</label>
          </div>
          <div className="col-75">
            <input
              type="number"
              id="number-of-days"
              name="number-of-days"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="departure-date">Departure date</label>
          </div>
          <div className="col-75">
            <input
              type="date"
              id="departure-date"
              name="departure-date"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="arrival-date">Arrival date</label>
          </div>
          <div className="col-75">
            <input
              type="date"
              id="arrival-date"
              name="arrival-date"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="email">Email</label>
          </div>
          <div className="col-75">
            <input
              type="email"
              placeholder="Email ID"
              name="email"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="contact-no">Contact Number</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              pattern="[789][0-9]{9}"
              name="contact-no"
              placeholder="Phone no"
              title="Contact No. must be of 10 digits"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="contact-person-name">Person Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              placeholder="Contact Person Name"
              name="contact-person-name"
              required
            />
          </div>
        </div>
          <div className="row">
            <input type="submit" className="btn btn-info" value="Submit" />
          </div>
      </form>
    </div>
    );
    }
