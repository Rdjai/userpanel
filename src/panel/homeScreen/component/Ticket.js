import React from 'react'
import './PAYMENT.CSS'
import UiTheme from '../uitheme'
import NavBarComponent from '../navbar'
import SideBar from '../sidebar'
import "../../screen/css/transaction.css"
const TicketScreen = () => {
    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

            <NavBarComponent />

            <UiTheme />
            <div className="app-main ">
                <SideBar />
                <div className="container p-5 mx-auto">
                    <div className="row justify-content-center">

                        <div className="container my-5">
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <h1 className="mb-3">Contact Us</h1>
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="your-name" className="form-label">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="your-name"
                                                    name="your-name"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="your-surname" className="form-label">
                                                    Your Surname
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="your-surname"
                                                    name="your-surname"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="your-email" className="form-label">
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="your-email"
                                                    name="your-email"
                                                    required=""
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="your-subject" className="form-label">
                                                    Your Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="your-subject"
                                                    name="your-subject"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="your-message" className="form-label">
                                                    Your Message
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="your-message"
                                                    name="your-message"
                                                    rows={5}
                                                    required=""
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <button
                                                            data-res="<?php echo $sum; ?>"
                                                            type="submit"
                                                            className="btn btn-dark w-100 fw-bold"
                                                        >
                                                            Send
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



        </div>

    )
}

export default TicketScreen
