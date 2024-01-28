import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ragister.css';

import logo from '../../assest/logo-light.jpg'
import { Link } from 'react-router-dom';

const RagisterAccount = () => {
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
                        <input
                            type="text"
                            className="form-control"
                            placeholder="referral Id"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="mobile Number" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="xyz@gmail.com" />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="area Pincode" />
                    </div>

                    {/*          <div class="form-group">
            <label class="checkbox-inline"><input type="checkbox" value=""> Keep me sign in</label>
         </div> */}
                    <a href="#" className="btn btn-primary btn-block">
                        Login
                    </a>

                    <p className="text-center">
                        <small className='d-flex forget-create'>
                            <Link to="#" className="btn-link ">
                                Forgot password
                            </Link>
                            <Link to="/login" className="btn-link">
                                Login Account
                            </Link>
                        </small>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RagisterAccount;
