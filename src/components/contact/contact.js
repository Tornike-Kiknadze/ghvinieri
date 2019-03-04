import React, { Component } from "react";

import "./contact.css";
import Footer from "../footer/footer";
import Phone from "../../assets/svg/phone";
import Location from "../../assets/svg/address";
import Clock from "../../assets/svg/workinghours";
import Header from "../sectionheader/header";
import Form from "../contactform/form";
import HomeButton from "../homebutton/homebutton";
import Upbutton from "../upbutton/upbutton";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="contact">
          <div className="contact-header">
            <HomeButton />
            <h3>Contact</h3>
          </div>
          <div className="contact-content">
            <div className="contact-content-links">
              <div className="contact-content-links-item">
                <Phone width={50} height={50} fill={"#C02323"} />
                <p className="contact-paragraph">
                  Phone
                  <br />
                  (+995)599-11-11-11
                  <br />
                  foo@foo.com
                </p>
              </div>
              <div className="contact-content-links-item">
                <Location width={50} height={50} fill={"#C02323"} />
                <p className="contact-paragraph">
                  Address
                  <br />
                  Tbilisi
                  <br />
                  Georgia
                </p>
              </div>
              <div className="contact-content-links-item">
                <Clock width={50} height={50} fill={"#C02323"} />
                <p className="contact-paragraph">
                  Opened
                  <br />
                  Monday - Today: 8h - 22h
                  <br />
                  Sunday: Close
                </p>
              </div>
            </div>
          </div>
          <div className="contact-us">
            <div className="image-container"> </div>
            <Header header="Contact Us" title="Get in touch" />
            <Form />
          </div>
        </div>
        <Upbutton />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
