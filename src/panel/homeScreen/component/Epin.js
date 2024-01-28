import React from 'react'
import './PAYMENT.CSS'
import UiTheme from '../uitheme'
import NavBarComponent from '../navbar'
import SideBar from '../sidebar'
const Epin = () => {
    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

            <NavBarComponent />

            <UiTheme />
            <div className="app-main ">
                <SideBar />
                <>
                    <div className="container my-5 mx-auto">
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
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-md-12">

                                                    <h6>Perchase E-pin</h6>
                                                    <select className="custom-select" id="gender2">
                                                        <option selected="">E-pin...</option>
                                                        <option value={1}>1255</option>
                                                        <option value={2}>4555</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button
                                                        data-res="<?php echo $sum; ?>"
                                                        type="submit"
                                                        className="btn btn-dark w-100 fw-bold"
                                                    >
                                                        Recharge
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                </>


            </div>
        </div>

    )
}

export default Epin
