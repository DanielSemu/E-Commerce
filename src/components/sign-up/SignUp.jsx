import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import "./SignUp.scss";
import CustomButton from "../custom-button/CustomButton";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      lastname:'',
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };
  render() {
    return (
      <div className="sign-up">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
        <FormInput
            type="text"
            handlechange={this.handleChange}
            name="name"
            value={this.state.name}
            label="Name"
            required
          />
          <FormInput
            type="text"
            handlechange={this.handleChange}
            name="lastname"
            value={this.state.lastname}
            label="Last name"
            required
          />
          <FormInput
            type="email"
            handlechange={this.handleChange}
            name="email"
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handlechange={this.handleChange}
            label="Password"
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
          
          
        </form>
      </div>
    );
  }
}

export default SignUp;
