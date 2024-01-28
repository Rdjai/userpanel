import React from 'react'

const MainCompnent = () => {
    return (

        <div className="app-main__inner">
            <div className='m-2 text-secondary border-text-secondary'>
                <p className="alert alert-warning">Some text success or error Dynamic</p>
            </div>

            <div className="row">
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-primary ">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading me-1">Total Earning</div>

                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white ms-2">
                                    <span>₹</span>  <span>1896</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-midnight-bloom">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Task Earning</div>

                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white ms-2">
                                    <span>  568</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-grow-early">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading me-2">Referral Earning</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white">
                                    <span>₹</span>  <span>1896</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-grow-early">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading me-2">Team</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white">
                                    <span></span> 100   <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-grow-early">
                        <div className="widget-content-wrapper text-white">

                            <div className="widget-content-right">
                                <div className="widget-numbers text-white">
                                    Deposit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-grow-early">
                        <div className="widget-content-wrapper text-white">

                            <div className="widget-content-right">
                                <div className="widget-numbers text-white">
                                    Withdraw
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="main-card mb-3 card">
                        <div className="card-header">
                            Your Team
                            <div className="btn-actions-pane-right">
                                <div role="group" className="btn-group-sm btn-group">
                                    <button className="active btn btn-focus">Last Week</button>
                                    <button className="btn btn-focus">All Month</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>Name</th>
                                        <th className="text-center">Area</th>
                                        <th className="text-center">Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center text-muted">#345</td>
                                        <td>
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-content-left">
                                                            <img width={40} className="rounded-circle"
                                                                src="assets/images/avatars/4.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left flex2">
                                                        <div className="widget-heading">John Doe</div>
                                                        <div className="widget-subheading opacity-7">
                                                            Web Developer
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">Madrid</td>
                                        <td className="text-center">
                                            <div className="badge badge-warning">Pending</div>
                                        </td>
                                        <td className="text-center">
                                            <button type="button" id="PopoverCustomT-1"
                                                className="btn btn-primary btn-sm">
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center text-muted">#347</td>
                                        <td>
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-content-left">
                                                            <img width={40} className="rounded-circle"
                                                                src="assets/images/avatars/3.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left flex2">
                                                        <div className="widget-heading">
                                                            Ruben Tillman
                                                        </div>
                                                        <div className="widget-subheading opacity-7">
                                                            Etiam sit amet orci eget
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">Berlin</td>
                                        <td className="text-center">
                                            <div className="badge badge-success">Completed</div>
                                        </td>
                                        <td className="text-center">
                                            <button type="button" id="PopoverCustomT-2"
                                                className="btn btn-primary btn-sm">
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center text-muted">#321</td>
                                        <td>
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-content-left">
                                                            <img width={40} className="rounded-circle"
                                                                src="assets/images/avatars/2.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left flex2">
                                                        <div className="widget-heading">Elliot Huber</div>
                                                        <div className="widget-subheading opacity-7">
                                                            Lorem ipsum dolor sic
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">London</td>
                                        <td className="text-center">
                                            <div className="badge badge-danger">In Progress</div>
                                        </td>
                                        <td className="text-center">
                                            <button type="button" id="PopoverCustomT-3"
                                                className="btn btn-primary btn-sm">
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center text-muted">#55</td>
                                        <td>
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-content-left">
                                                            <img width={40} className="rounded-circle"
                                                                src="assets/images/avatars/1.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left flex2">
                                                        <div className="widget-heading">
                                                            Vinnie Wagstaff
                                                        </div>
                                                        <div className="widget-subheading opacity-7">
                                                            UI Designer
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">Amsterdam</td>
                                        <td className="text-center">
                                            <div className="badge badge-info">On Hold</div>
                                        </td>
                                        <td className="text-center">
                                            <button type="button" id="PopoverCustomT-4"
                                                className="btn btn-primary btn-sm">
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-block text-center card-footer">
                            <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                                <i className="pe-7s-trash btn-icon-wrapper"> </i>
                            </button>
                            <button className="btn-wide btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    )
}

export default MainCompnent
