import React, { Component } from 'react'
import FormInput from '../form-input/FormInput';
import './SignIn.scss'
import CustomButton from '../custom-button/CustomButton';
class SignIn extends Component {
    constructor(props){
    super(props);
    this.state={
        email:'',
        password:''
    }
}
handleSubmit =event=>{
    event.preventDefault();
    this.setState({email:'',password:''})
}
handleChange=event=>{
    const {value,  name} =event.target
    this.setState({[name]:value})
}
  render() {
    return (
      
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form  onSubmit={this.handleSubmit}>
            <FormInput type="email" 
            handlechange={this.handleChange} 
            name='email' 
            value={this.state.email}
            label='email'
            required
             />
            
            <FormInput type="password" 
            name='password'
            value={this.state.email}
            handlechange={this.handleChange}
            label='password'
            required
            />
           
            <CustomButton type="submit" >Sign in</CustomButton>
        </form>
        
      </div>
    )
  }
}

export default SignIn