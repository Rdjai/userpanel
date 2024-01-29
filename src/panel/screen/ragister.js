import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assest/logo-light.jpg';
import { Link, useNavigate } from 'react-router-dom';
import './ragister.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegisterAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    referralPin: '',
    name: '',
    mobileNumber: '',
    email: '',
    password: '',
    areaPincode: '',
  });


  // console.log(formData.mobileNumber === 10);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRegistration = async (e) => {
    e.preventDefault();

    if (formData.mobileNumber.length == 10) {
      try {
        console.log('Request Payload:', JSON.stringify(formData));

        const response = await fetch('http://localhost:5000/users/Register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });


        if (response.ok) {

          toast.success('Registration successful!');

          console.log('User registered successfully');
          setTimeout(() => {
            navigate("/")
          }, 1500);
        } else {

          const errorData = await response.json();
          toast.error('Registration failed: ' + errorData.message);
          console.error('Error registering user:', response.status, errorData);
        }
      } catch (error) {
        console.error('Error registering user:', error);
        toast.error('Error registering user: ', + error);
      } finally {
      }
    } else {
      toast.error("enter correct number");

    }

  };

  return (

    // <ToastContainer >

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
              required
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
              required

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
              required

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
              required

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
              required

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
              required

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
      <ToastContainer />

    </div >
  );
};

export default RegisterAccount;
