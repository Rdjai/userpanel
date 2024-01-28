import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assest/logo-light.jpg'
const SideBar = () => {
    return (
        <div className="app-sidebar sidebar-shadow">

            <div className="app-sidebar__inner">

                <div className='text-center mt-4'>
                    <Image src={logo} width={75} height={75} />
                </div>


                <ul className="vertical-nav-menu sidebar-menu scrollbar-sidebar">
                    <li className="app-sidebar__heading">User Menual</li>
                    <li>
                        <Link to='/dashboard'>

                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/dashboard.png" alt="icon" /> <button className='nav-btn-no-style'>Dashboard</button>            </Link>
                    </li>
                    <li>
                        <Link to="/BankTransfer">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/withdraw.png" alt="icon" /> Withdraw            </Link>
                    </li>

                    <li>
                        <Link to="/Deposit">
                            <img src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/wallet.png" alt="icon" /> Deposit          </Link>
                    </li>
                    <li>
                        <Link to="/epin">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/epin.png" alt="icon" /> E-pin Recharge                </Link>
                    </li>

                    <li>
                        <Link to="/task">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/bv_log.png" alt="icon" /> Task           </Link>
                    </li>
                    <li>
                        <Link to='/team'>
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/referral.png" alt="icon" /> My Referrals       </Link>
                    </li>




                    <li>
                        <Link to='/transaction' >
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/transactions.png" alt="icon" /> Transactions            </Link>
                    </li>
                    <li>
                        <a href="#" >
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/ranking.png" alt="icon" /> Ranking                </a>
                    </li>

                    <li>
                        <Link to="/ticket" >
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/ticket.png" alt="icon" /> Support Ticket            </Link>
                    </li>

                    <li>
                        <a href="#" >
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/profile.png" alt="icon" /> Profile            </a>
                    </li>
                    <li>
                        <a href="#" >
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/password.png" alt="icon" /> Change Password            </a>
                    </li>
                    <li>
                        <a href="#" >
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/logout.png" alt="icon" /> Logout            </a>
                    </li>

                </ul>
            </div>
        </div>

    )
}

export default SideBar
