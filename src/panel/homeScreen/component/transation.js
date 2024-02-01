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
                <div className="container mx-auto p-1">

                    <h1 className="text-center pt-4">
                        Payment History

                    </h1>
                    <div className="container table-responsive py-5">
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">PAYMENT METHOD</th>
                                    <th scope="col">TOTAL PAYMENT</th>
                                    <th scope="col">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>UPI</td>
                                    <td>1200</td>
                                    <td className='text-success'>success</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>UPI</td>
                                    <td>12000</td>
                                    <td className='text-warning'>pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>UPI</td>
                                    <td>12000</td>
                                    <td className='text-danger'>pending</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>



                </div>
            </div>
        </div>




    )
}

export default TaskScreen
