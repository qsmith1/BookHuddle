import React from 'react';
import $ from 'jquery';
import { Link, Redirect } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      location: ''
    }
    this.change = this.change.bind(this);
    this.signupSubmit = this.signupSubmit.bind(this);
  }

  change(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  signupSubmit(e) {
    e.preventDefault();
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      location: this.state.location
    }

    this.props.signup(formData, (err) => {
      console.log('error signing in:', err)
    });
  }

  render() {
    if (this.props.isLoggedIn) {
      <Redirect to='/dashboard'/>
    }
    return (
      <form >
        <div className="form-row">
          <div className="form-group col-md-6">
            <input name="firstName" onChange={event => this.change(event)} type="text" className="form-control" id="inputFirstName" placeholder="First name"/>
          </div>
          <div className="form-group col-md-6">
            <input name="lastName" onChange={event => this.change(event)} type="text" className="form-control" id="inputLastName" placeholder="Last name"/>
          </div>
        </div>
        <div className="form-group">
          <input name="email" onChange={event => this.change(event)} type="email" className="form-control" id="inputEmail" autoComplete="email" placeholder="Email"/>
        </div>
        <div className="form-group">
          <input name="password" onChange={event => this.change(event)} type="password" className="form-control" autoComplete="current-password" id="inputPassword" placeholder="Password"/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input name="location" onChange={event => this.change(event)} type="text" className="form-control" id="userLocation" placeholder="Location"/>
          </div>
        </div>
        <div className="centerize">
        <button onClick={this.signupSubmit} type="submit" className="btn-primary btn">Sign Up</button>
        </div>
      </form>
    );
  }
}

export default Signup;