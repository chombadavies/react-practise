


import React from "react";

export default class Form extends React.Component {
  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    username: "",
    userNameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

validate =()=>{
  let isError = false
  const Errors ={}
if(this.state.username.length > 5){
isError = true
Errors.userNameError ='the username must be hiher than four'
}
if(isError){
this.setState({
 ...this.state,
 ...Errors 
})
}
return isError
}

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      this.setState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      });
      this.props.onChange({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      });
    }
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          hintText='First Name'
          floatingLableText="first name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          errorText={this.state.firstNameError}
          floatingLableFixed
        />
        <br />
        <input
          name="lastName"
          hintText='Last Name'
          floatingLableText="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          errorText={this.state.lastNameError}
          floatingLableFixed
        />
        <br />
        <input
          name="username"
          hintText='User Name'
          floatingLableText='User Name'
          value={this.state.username}
          onChange={e => this.change(e)}
          errorText={this.state.userNameError}
          floatingLableFixed
        />
        <br />
        <input
          name="email"
          hintText='Email'
          floatingLableText='Email'
          value={this.state.email}
          onChange={e => this.change(e)}
          errorText={this.state.emailError}
          floatingLableFixed
        />
        <br />
        <input
          name="password"
          type="password"
          hintText='Passwprd'
          floatingLableText='Passwprd'
          value={this.state.password}
          onChange={e => this.change(e)}
          errorText={this.state.passwordError}
          floatingLableFixed
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
