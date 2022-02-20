import React, { useState } from "react";
import { Link, Redirect ,useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
const googleClientId = '71537523690-u72ia9qi7cu036h96s3e8jpe9vm7vs1o.apps.googleusercontent.com';
const axios = require('axios');

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }
  
    const history = useHistory();
    const [state, setState] = useState({
        userName: '',
        password: '',
        email   : '',
    });
    const handleChange = event => {
        const value = event.target.value;
        setState({...state, [event.target.name]: value});
    };
    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER_API_CODE}subscribers/login` , {
            credential : state.userName,
            password : state.password
        }).then(function (response) {
            console.log(response);
            localStorage.setItem('login' , true);
            localStorage.setItem('loggedInUser' , JSON.stringify(response.data));
            history.push('/')
        }).catch(function (error) {
                console.log(error);
        });
    };
    return (
        <div>
          
        <div className="container flex-container">
          <div className="row">
            <div >
              <div>
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <Link to='/signup'>
                    <button className="btn btn-light btn-primary ">Sign UP</button>
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
                      <button type='submit' className="btn btn-light singup-btn">SIGN IN</button>
                    </small>
                  </small>
                  <strong className="login__seprator">OR</strong>
                  <GoogleLogin
                        clientId={googleClientId}
                        buttonText="Login With Google"  
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;
