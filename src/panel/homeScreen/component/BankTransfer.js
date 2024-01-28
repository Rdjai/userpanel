import React from 'react'
import './PAYMENT.CSS'
import UiTheme from '../uitheme'
import NavBarComponent from '../navbar'
import SideBar from '../sidebar'
const BankTransfer = () => {
    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

            <NavBarComponent />

            <UiTheme />
            <div className="app-main">
                <SideBar />
                <div className="container py-5">

                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <div className="bg-white rounded-lg shadow-sm p-5">
                                {/* Credit card form tabs */}
                                <ul
                                    role="tablist"
                                    className="nav bg-light nav-pills rounded-pill nav-fill mb-3"
                                >
                                    <li className="nav-item">
                                        <a
                                            data-toggle="pill"
                                            href="#nav-tab-card"
                                            className="nav-link active rounded-pill"
                                        >

                                            UPI ID
                                        </a>
                                    </li>

                                </ul>

                                <div className="tab-content">
                                    {/* credit card info*/}
                                    <div id="nav-tab-card" className="tab-pane fade show active">

                                        <form role="form">
                                            <div className="form-group">
                                                <label htmlFor="username">UPI ID</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="xyz@upi"
                                                    required=""
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="cardNumber">Add Amount</label>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        name="Add Amount"
                                                        placeholder="Amount"
                                                        className="form-control"
                                                        required=""
                                                    />

                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                className="subscribe btn btn-primary btn-block rounded-pill shadow-sm"
                                            >
                                                {" "}
                                                Withdraw
                                            </button>
                                        </form>
                                    </div>
                                    {/* End */}
                                    {/* Paypal info */}
                                    <div id="nav-tab-paypal" className="tab-pane fade">
                                        <p>Paypal is easiest way to pay online</p>
                                        <p>
                                            <button type="button" className="btn btn-primary rounded-pill">
                                                <i className="fa fa-paypal mr-2" /> Log into my Paypal
                                            </button>
                                        </p>
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    {/* End */}
                                    {/* bank transfer info */}
                                    <div id="nav-tab-bank" className="tab-pane fade">
                                        <h6>Bank account details</h6>
                                        <dl>
                                            <dt>Bank</dt>
                                            <dd> THE WORLD BANK</dd>
                                        </dl>
                                        <dl>
                                            <dt>Account number</dt>
                                            <dd>7775877975</dd>
                                        </dl>
                                        <dl>
                                            <dt>IBAN</dt>
                                            <dd>CZ7775877975656</dd>
                                        </dl>
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                    {/* End */}
                                </div>
                                {/* End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BankTransfer
