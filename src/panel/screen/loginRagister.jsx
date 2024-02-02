import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assest/logo-light.jpg'
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AccountCriteria = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        mobileNumber: '',
        password: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            console.log('Request Payload:', JSON.stringify(formData));

            const response = await fetch('http://localhost:5000/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json();
            // console.log("id", data.token);
            localStorage.setItem('token', data.token);

            console.log("this is ", data._id);




            if (response.ok) {
                // Login successful, handle success (e.g., redirect to dashboard)
                console.log('User logged in successfully');
                toast.success('Redirecting successful!');

                console.log('User Login successfully');
                setTimeout(() => {
                    navigate("/dashboard")
                }, 1000);
            } else {
                // Login failed, handle error
                const errorData = await response.json();
                toast.error('Login failed: ' + errorData.message);

                // console.error('Error logging in:', response.statusText);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error(error.message);
            setTimeout(() => {
                toast.success("we are working on it , fixed it ASAP");
            }, 1000);
        }
    };



    return (
        <div className="login-wrp">
            <div className="top">
                <div className="logo">
                    <img
                        src={logo}
                        alt=""
                        width="100px"
                    />
                </div>
            </div>
            <div className="bottom">
                <form action="" className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="mobile number" name='mobileNumber'
                            value={formData.mobileNumber}
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
                        />
                    </div>

                    <Button className="btn btn-primary btn-block" type='submit'>Login</Button>


                    <p className="text-center">
                        <small className='d-flex forget-create'>
                            <Link to="#" className="btn-link ">
                                Forgot password
                            </Link>
                            <Link to="/ragister" className="btn-link">
                                Create Account
                            </Link>
                        </small>
                    </p>
                </form>
            </div>
            <ToastContainer />

        </div>
    );
};

export default AccountCriteria;
