import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assest/logo-light.jpg';
import { Link } from 'react-router-dom';
import './ragister.css'
const RegisterAccount = () => {
  const [formData, setFormData] = useState({
    referralPin: '',
    name: '',
    mobileNumber: '',
    email: '',
    password: '',
    areaPincode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/users/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful, handle success (e.g., redirect to login page)
        console.log('User registered successfully');
      } else {
        // Registration failed, handle error
        console.error('Error registering user:', response.statusText);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="login-wrp">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" width="100px" />
        </div>
      </div>
      <div className="bottom">
        <form action="" className="login-form" onSubmit={handleRegistration}>
          <div className="form-group">
            <input
              type="text"
              name="referralPin"
              className="form-control"
              placeholder="Referral Pin"
              value={formData.referralPin}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="mobileNumber"
              className="form-control"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="xyz@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="areaPincode"
              className="form-control"
              placeholder="Area Pincode"
              value={formData.areaPincode}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
          <p className="text-center">
            <small className="d-flex forget-create">
              <Link to="#" className="btn-link">
                Forgot password
              </Link>
              <Link to="/" className="btn-link">
                Login Account
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterAccount;
