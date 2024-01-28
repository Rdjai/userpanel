import React from 'react'
import './PAYMENT.CSS'
import UiTheme from '../uitheme'
import NavBarComponent from '../navbar'
import SideBar from '../sidebar'
import "../../screen/css/transaction.css"
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
                            <div className='d-flex justify-content-around text-success'>
                                <div className="col-12  mb-1">
                                    <h3 className="text-uppercase text-bold">Your All Transactions is here </h3>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">List</th>
                                                    <th scope="col">Payment Method</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Total payment</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>UPI</td>
                                                    <td>Cristina</td>
                                                    <td>₹ 12126</td>
                                                    <td>
                                                        <h5 className='text-success'>success</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>UPI</td>
                                                    <td>Cristina</td>
                                                    <td> ₹ 12126</td>
                                                    <td>
                                                        <h5 className='text-danger'>success</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>UPI</td>
                                                    <td>Cristina</td>
                                                    <td> ₹ 12126</td>
                                                    <td>
                                                        <h5 className='text-success'>success</h5>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default TaskScreen
