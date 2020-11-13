import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const initialInput = {
  username: "",
  password: "",
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [input, setInput] = useState(initialInput)
  const {push} = useHistory();

  function changeHandler(e) {
    setInput({...input, [e.target.name]: e.target.value})
  }

  async function submitForm(e) {
    e.preventDefault();
    const axiosPost = await axios.post('http://localhost:5000/api/login', input)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
    })
    .catch(err => console.log(err))
    push('/protected')
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="username">Username:
          <input
          type="text"
          name="username"
          value={input.username}
          onChange={changeHandler}
          />
        </label>

        <label htmlFor="username">Password:
          <input
          type="text"
          name="password"
          value={input.password}
          onChange={changeHandler}
          />
        </label>

        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
