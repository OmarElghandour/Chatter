import React, { useState } from "react";
// import { Dropdown } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
const googleClientId = '71537523690-u72ia9qi7cu036h96s3e8jpe9vm7vs1o.apps.googleusercontent.com';

const axios = require('axios');

const Signup = () => {
  const history = useHistory();
  const [state, setState] = useState({
    userName: '',
    password: '',
    email: '',
    role: 'Select Role',
  });
  const handleChange = event => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  const setUserRole = event => {
    setState({ ...state, role: event });
  };

  const responseGoogle = (response) => {
    console.log(response);
  }

  const handleSubmit = event => {
    console.log(state);
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_SERVER_API_CODE}subscribers/register`, {
      name: state.userName,
      password: state.password,
      email: state.email,
      role: state.role,
    }).then(function (response) {
      console.log(response);
      // localStorage.setItem('login', true);
      // localStorage.setItem('loggedInUser', JSON.stringify(response.data));
      history.push('/login');
    }).catch(function (error) {
      console.log(error);
    });
  };
  return (
    <div>
      <div className="container flex-container">
        <div className="row">
          <div className="form">
            <div className="left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <Link to='/login'>
                <button className="btn btn-light btn-primary">SIGN IN</button>
              </Link>
            </div>
            <div className="right ">
              <form onSubmit={handleSubmit}>
                <h1>Create Account </h1>

                <small id="emailHelp" className="form-text text-muted">
                  <div className="form-group">

                    <label htmlFor="exampleInputEmail1" />
                    <input type="text" className="form-control" name="userName" id="exampleInputEmail1"
                      value={state.userName}
                      onChange={handleChange}
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" />
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1"
                      value={state.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                    />
                  </div>
                  <small id="emailHelp" className="form-text text-muted">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" />
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                        name="password"
                      />
                    </div>
                    <button type='submit' className="btn btn-light ">SIGN UP</button>
                  </small>
                  <strong className="login__seprator">OR</strong>
                  <GoogleLogin
                        clientId={googleClientId}
                        buttonText="Sing Up With Google"  
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
