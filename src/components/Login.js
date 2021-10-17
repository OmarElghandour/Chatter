import React, { useState } from "react";
import { Link, Redirect ,useHistory } from "react-router-dom";
const axios = require('axios');

const Login = () => {
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
        <div className="container">
          <div className="row">
            <div className="form col-lg-10 col-md-12 col-sm-12">
              <div className="left col-lg-6 col-md-6 col-sm-6 ">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <Link to='/signup'>
                    <button className="btn btn-light ">SIGN UP</button>
                </Link>
              </div>
              <div className="right ">
                <form onSubmit={handleSubmit}>
                  <h1>Create Account </h1>
  
                  <small id="emailHelp" className="form-text text-muted">
                    <div className="form-group">
  
                      <label htmlFor="exampleInputEmail1" />
                      <input type="email" className="form-control" name="userName" id="exampleInputEmail1"
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
                      <button type='submit' className="btn btn-light ">SIGN IN</button>
                    </small>
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;
