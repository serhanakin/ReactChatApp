import React, { useState } from 'react';
import Add from '../img/addAvatar.png';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
     
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };


  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Can Chat</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Sign in</button>
            </form>
            <p>You do not have an account? Register.</p>
        </div>
    </div>
    
  )
}

export default Login