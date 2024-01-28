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
                <div className="container my-5 mx-auto">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className='d-flex justify-content-around text-success ms-5'>
                                <h1 className="mb-3">Your Task</h1>
                                <div className="col-12 mt-3 mb-1">
                                    <h3 className="text-uppercase text-bold">Earn Extra Money</h3>
                                    <p className="text-uppercase text-bold fs-5">Just Complete some Task &amp; And Get Reward.</p>
                                </div>
                            </div>
                            <div className="grey-bg container-fluid">

                                <section id="stats-subtitle">
                                    <div className="row">

                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12 col-md-12">
                                            <div className="card overflow-hidden">
                                                <div className="card-content">
                                                    <div className="card-body cleartfix">
                                                        <div className="media align-items-stretch">
                                                            <div className="align-self-center">
                                                                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/play-button-circled--v1.png" alt="play-button-circled--v1" />

                                                            </div>
                                                            <div className="media-body ms-5">
                                                                <h4>Watch Ad</h4>
                                                                <span>Earn Extra Money</span>
                                                            </div>
                                                            <div className="align-self-center">
                                                                <h1>50</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-md-12">
                                            <div className="card">
                                                <div className="card-content">
                                                    <div className="card-body cleartfix">
                                                        <div className="media align-items-stretch">
                                                            <div className="align-self-center">
                                                                <img width="50" height="50" src="https://img.icons8.com/material-rounded/24/download--v1.png" alt="download--v1" />
                                                            </div>
                                                            <div className="media-body ms-5">
                                                                <h4>Download App</h4>
                                                                <span>Download App and Use 5 min</span>
                                                            </div>
                                                            <div className="align-self-center">
                                                                <h1>120</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12 col-md-12">
                                            <div className="card">
                                                <div className="card-content">
                                                    <div className="card-body cleartfix">
                                                        <div className="media align-items-stretch">
                                                            <div className="align-self-center">
                                                                <img width="50" height="50" src="https://img.icons8.com/ios/50/domain--v1.png" alt="domain--v1" />
                                                            </div>
                                                            <div className="media-body ms-5">
                                                                <h4>Visite Website</h4>
                                                                <span>Visite website And earn Extra</span>
                                                            </div>
                                                            <div className="align-self-center">
                                                                <h1>90</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-md-12">
                                            <div className="card">
                                                <div className="card-content">
                                                    <div className="card-body cleartfix">
                                                        <div className="media align-items-stretch">
                                                            <div className="align-self-center">
                                                                <img width="64" height="64" src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/external-Subscribe-social-media-bearicons-gradient-bearicons.png" alt="external-Subscribe-social-media-bearicons-gradient-bearicons" />
                                                            </div>
                                                            <div className="media-body ms-5">
                                                                <h4>Subscribe Channel</h4>
                                                                <span>Subscribe channels And earn Extra</span>
                                                            </div>
                                                            <div className="align-self-center">
                                                                <h1>90</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-md-12">
                                            <div className="card">
                                                <div className="card-content">
                                                    <div className="card-body cleartfix">
                                                        <div className="media align-items-stretch">
                                                            <div className="align-self-center">
                                                                <h1 className="mr-2">$36,000.00</h1>
                                                            </div>
                                                            <div className="media-body">
                                                                <h4>Total Cost</h4>
                                                                <span>Monthly Cost</span>
                                                            </div>
                                                            <div className="align-self-center">
                                                                <i className="icon-wallet success font-large-2" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default TaskScreen
