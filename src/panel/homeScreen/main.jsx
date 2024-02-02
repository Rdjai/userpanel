import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import { Image } from 'react-bootstrap';
import TeamList from '../../data.js/data';
const MainCompnent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');



    useEffect(() => {

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        console.log('User ID:', userId);

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v3/userdetails/${userId}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {

                    const result = await response.json();
                    console.log(result);
                    setData(result);
                    setLoading(false);

                } else {
                    setError('Error fetching data');
                    setLoading(false);
                }
            } catch (error) {
                setError('Error fetching data');
                console.error(error);
            }
        };

        fetchData();
    },);

    if (loading) {
        return <Image src="https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif" style={{
            textAlign: "center",
            justifyContent: "center",
            margin: "auto",
            padding: "auto"

        }} />
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const totalEarn = data?.user?.children?.length * 300 + data.income;


    return (

        <div className="app-main__inner">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 p-2">
                        <button className="btn btn-primary btn-block"> <a href="https://whatsapp.com/channel/0029VaLLtod9MF93RGMu4s1F" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>Whatsapp</a></button>
                    </div>
                    <div className="col-12 col-sm-6 p-2">
                        <button className="btn btn-secondary btn-block"><a href="https://t.me/nimcetzonecrack2024" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>Telegram</a></button>
                    </div>
                </div>
            </div>
            <div className='m-2 text-secondary border-text-secondary'>
                <p className="alert alert-warning">{data.user.email}</p>
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
                                    <span>₹</span>  <span>{totalEarn}</span>
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
                                    <span>₹</span> <span>{data?.user?.children?.length * 300}</span>

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
                                    <span></span> <span>{data?.user?.children?.length}</span>

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

            <TeamList />


            {/* <div className="row">
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
            </div> */}


        </div>



    )
}

export default MainCompnent
