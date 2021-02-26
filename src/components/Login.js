import React, {useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialState = {
  username: "Lambda School",
  password: "i<3Lambd4"
}

const Login = () => {
  const [form, setForm] = useState(initialState);
  const { push } = useHistory();
  const [error, setError] = useState(false);

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();

    axios
    .post('http://localhost:5000/api/login', form)
    .then(response => {
      localStorage.setItem('token', response.data.payload);
      push('/bubbles')
    })
    .catch(error => {
      setError(error)
      setForm(initialState)
    }
    )
  }
  //above should post the credentials, run the auth, set the token, and post an error if there's an issue. Error should appear with paragraph below.

  //useEffect just seems unnecessary here.

  // useEffect(()=>{
  //   // make a post request to retrieve a token from the api
  //   // when you have handled the token, navigate to the BubblePage route
  // });

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
              name='username'
              type='text'
              value={form.username}
              onChange={handleChange}
            />
          </label>
          
          <label>
            Password
            <input
              name='password'
              type='password'
              value={form.password}
              onChange={handleChange}
            />
            </label>
            <div>
              {error && <p>Username or Password not valid.</p>}
            </div>
            <button>Submit</button>
      </form>

    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.