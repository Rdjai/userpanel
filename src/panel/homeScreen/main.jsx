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



                <div className="col-lg-6 col-xl-3 mb-4">
                    <div className="card bg-primary text-white h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="me-3">
                                    <div className="text-white-75 small">Earnings (Monthly)</div>
                                    <div className="text-lg fw-bold">₹ {totalEarn}</div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-dollar-sign feather-xl text-white-50"
                                >
                                    <line x1={12} y1={1} x2={12} y2={23} />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>

                            </div>
                        </div>

                    </div>
                </div>



                <div className="col-lg-6 col-xl-3 mb-4">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="me-3">
                                    <div className="text-white-75 small">Task Completion</div>
                                    <div className="text-lg fw-bold">₹ {data.income}</div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-check-square feather-xl text-white-50"
                                >
                                    <polyline points="9 11 12 14 22 4" />
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                </svg>
                            </div>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between small">

                            <div className="text-white">
                                <svg
                                    className="svg-inline--fa fa-angle-right"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="angle-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 512"
                                    data-fa-i2svg=""
                                >
                                    <path
                                        fill="currentColor"
                                        d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                    />
                                </svg>
                                {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                            </div>
                        </div>
                    </div>
                </div>






                <div className="col-lg-6 col-xl-3 mb-4">
                    <div className="card bg-danger text-white h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="me-3">
                                    <div className="text-white-75 small">Referral Earning</div>
                                    <div className="text-lg fw-bold">₹{data?.user?.children?.length * 300}</div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-message-circle feather-xl text-white-50"
                                >
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </div>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between small">

                            <div className="text-white">
                                <svg
                                    className="svg-inline--fa fa-angle-right"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="angle-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 512"
                                    data-fa-i2svg=""
                                >
                                    <path
                                        fill="currentColor"
                                        d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                    />
                                </svg>
                                {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-lg-6 col-xl-3 mb-4">
                    <div className="card bg-danger text-white h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="me-3">
                                    <div className="text-white-75 small">Total Team Member</div>
                                    <div className="text-lg fw-bold">{data?.user?.children?.length}</div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-message-circle feather-xl text-white-50"
                                >
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </div>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between small">

                            <div className="text-white">
                                <svg
                                    className="svg-inline--fa fa-angle-right"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="angle-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 512"
                                    data-fa-i2svg=""
                                >
                                    <path
                                        fill="currentColor"
                                        d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                    />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-warning">
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
                <div className="col-lg-6 col-xl-3 mb-4">
                    <div className="card bg-primary text-white h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="me-3">
                                    <div className="text-white-75 small">Earnings (Monthly)</div>
                                    <div className="text-lg fw-bold">$40,000</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar feather-xl text-white-50"><rect x={3} y={4} width={18} height={18} rx={2} ry={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <TeamList />




        </div>



    )
}

export default MainCompnent
