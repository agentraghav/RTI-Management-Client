import React, { useContext, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "../css/form.css";

import axios from 'axios';

import UserContext from './userContext';

import ErrorNotice from './error-notice';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const history = useHistory();
  const { setUserData } = useContext(UserContext);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginResponse = await axios.post('http://localhost:5000/superadmins/login', loginUser);
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem('auth-token', loginResponse.data.token);
      history.push('/');
    } catch (err) {
      console.log(err);
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className='Login'>
      
     

      <Form onSubmit={submit}>
       
      <h4 align="center">University Admin Login</h4>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
        <Form.Group size="lg" controlId="email" className="mt-5">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email" 
            id='email' 
            onChange={(e) => setEmail(e.target.value)} 
            required
            />

        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)} 
            required
            
          />
        </Form.Group>
        <Button block size="lg" type="submit" >
          Login
        </Button>
      </Form>

      
    </div>

    
    
  );
}