import React, { useEffect, useState } from "react";
import axios from 'axios';

const initialValues = {
  error: '',
  credentials: {
    username:'',
    password:'',
  }
};

const Login = (props) => {
  const [values, setValues ] = useState(initialValues);

  const handleChanges = e => {
    setValues({
      credentials: {
        ...values,
        [e.target.name]: e.target.value
      }
    })

  }

  useEffect(()=>{
    axios.post('http://localhost:5000/api/login', { username: 'Lambda School', password: 'i<3Lambd4' })
      .then(res =>{
        console.log(res.data);
        localStorage.setItem('token');
        props.history.push('/protected')
      })
      .catch(err =>{
        console.log(err)
        setValues({error: 'Username or Password is not valid.'})
      })

    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });


  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <div>
        <form onSubmit={useEffect}>
          <input
            data-testid="username"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChanges}
          />
          <input
            data-testid="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChanges}
          />
          <button>Log in</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{values.error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.