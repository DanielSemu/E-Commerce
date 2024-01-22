import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";
import CustomButton from "../custom-button/CustomButton";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({email:'' , password:''})
    // Your form submission logic here
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
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
            label="password"
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
          
          <CustomButton type="submit">Sign in With Google</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
