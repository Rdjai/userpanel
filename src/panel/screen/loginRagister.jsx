import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
import logo from '../../assest/logo-light.jpg'

const AccountCriteria = () => {
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
                <form action="" className="login-form">
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="mobile number" />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                        />
                    </div>

                    <Link to="/dashboard" className="btn btn-primary btn-block">
                        Login
                    </Link>

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
        </div>
    );
};

export default AccountCriteria;
