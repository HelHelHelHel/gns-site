import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';

import './sign-in.style.scss';

class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      email: '',
      password: ''
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '', password: ''
    })
  }
  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value})
  }
  render() {
    return (
      <div className ="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
          name="email" 
          label="email" 
          type="email"
          value={this.state.email} 
          handleChange={this.handleChange} 
          required />
          <FormInput 
          name="password" 
          label="password"
          type="password" 
          handleChange={this.handleChange} 
          value={this.state.password} 
          required />
          <input type="submit" value= "Submit form"/>
        </form>
      </div>
    )
  }
}

export default SignIn;