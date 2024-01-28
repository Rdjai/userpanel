import React from 'react'
import './PAYMENT.CSS'
import UiTheme from '../uitheme'
import NavBarComponent from '../navbar'
import SideBar from '../sidebar'
const TaskScreen = () => {
    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

            <NavBarComponent />

            <UiTheme />
            <div className="app-main ">
                <SideBar />
                <>
                    <div className="container my-5">
                        <div className="col-md-5 mt-5 mt-md-0 d-none d-md-block m-auto">
                            <div className="bg-body shadow p-4 rounded-3 d-inline-block position-relative">
                                {/* Icon */}
                                <div className="icon-lg bg-warning rounded-circle position-absolute top-0 start-100 translate-middle">
                                    <i className="bi bi-shield-fill-check text-dark" />
                                </div>
                                {/* Title */}
                                <h6 className="mb-3">100+ Verified Mentors</h6>
                                {/* Mentor Item */}
                                <div className="d-flex align-items-center mb-3">
                                    {/* Avatar */}
                                    <div className="avatar avatar-sm">
                                        <div class="col-md-4 col-sm-6 mb-3">
                                            <button class="btn btn-success w-100">Success</button>
                                        </div>
                                    </div>
                                    {/* Info */}

                                </div>
                                {/* Mentor Item */}
                                <div className="d-flex align-items-center mb-3">
                                    {/* Avatar */}
                                    <div className="avatar avatar-sm">
                                        <img
                                            className="avatar-img rounded-1"
                                            src="assets/images/avatar/04.jpg"
                                            alt="avatar"
                                        />
                                    </div>
                                    {/* Info */}
                                    <div className="ms-2">
                                        <h6 className="mb-0">Billy Vasquez</h6>
                                        <p className="mb-0 small">Tutor of chemistry</p>
                                    </div>
                                </div>
                                {/* Mentor Item */}
                                <div className="d-flex align-items-center">
                                    {/* Avatar */}
                                    <div className="avatar avatar-sm">
                                        <img
                                            className="avatar-img rounded-1"
                                            src="assets/images/avatar/02.jpg"
                                            alt="avatar"
                                        />
                                    </div>
                                    {/* Info */}
                                    <div className="ms-2">
                                        <h6 className="mb-0">Larry Lawson</h6>
                                        <p className="mb-0 small">Tutor of technology</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </>


            </div>
        </div>
    )
}

export default TaskScreen
