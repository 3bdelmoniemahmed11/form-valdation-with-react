import React, { Component } from "react";
import "./App.css";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  }

  formValid = (formErrors) => {
    let valid = true;
    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    return valid;
  };
  handchange = (e) => {
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 && value.length > 0
            ? "minimum 3 characters required"
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 && value.length > 0
            ? "minimum 3 characters required"
            : "";
        break;
      case "email":
        formErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 3 && value.length > 0
            ? "minimum 3 characters required"
            : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form noValidate>
            <div className="firstName">
              <label htmlFor="firstName">firstName</label>
              <input
                type="text"
                name="firstName"
                placeholder="firstName"
                noValidate
                onChange={this.handchange}
              />
              {formErrors.firstName.length > 0 ? (
                <span className="errorMessage">{formErrors.firstName}</span>
              ) : (
                ""
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">lastName</label>
              <input
                type="text"
                name="lastName"
                placeholder="lastName"
                noValidate
                onChange={this.handchange}
              />
              {formErrors.lastName.length > 0 ? (
                <span className="errorMessage">{formErrors.lastName}</span>
              ) : (
                ""
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                noValidate
                onChange={this.handchange}
              />
              {formErrors.email.length > 0 ? (
                <span className="errorMessage">{formErrors.email}</span>
              ) : (
                ""
              )}
            </div>
            <div className="password">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                noValidate
                onChange={this.handchange}
              />
              {formErrors.password.length > 0 ? (
                <span className="errorMessage">{formErrors.password}</span>
              ) : (
                ""
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Aready you Have an Account</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
