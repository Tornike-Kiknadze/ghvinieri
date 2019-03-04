import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  /*   constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
      surname: "",
      company: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    this.setState({ name: "" });
    e.preventDefault();
    const { name, email, message, surname, company } = this.state;

    const res = await axios.post("https://sleepy-inlet-92666.herokuapp.com/form", {
      name,
      email,
      message,
      surname,
      company
    });
    if (res.data.ok === true) {
      toast.success("Your message has been sent");
    } else {
      toast.error("Error sending message");
    }
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  }; */

  render() {
    return (
      <div className="contactform">
        <div className="form-wrapper">
          {" "}
          <form
            method="POST"
            className="contact__form"
            onSubmit={this.handleSubmit}
          >
            <div className="input">
              <div className="contact__form__firstcolumn">
                <input
                  type="text"
                  className="contact__form__text1"
                  placeholder="full name"
                  name="name"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  className="contact__form__text2"
                  placeholder="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <textarea
              name="message"
              className="contact__form__textarea"
              placeholder="Text..."
              rows="10"
              onChange={this.handleChange}
            />{" "}
            <button className="form-button">
              <span>SEND</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
