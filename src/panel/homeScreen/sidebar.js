import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="app-sidebar sidebar-shadow">


            <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu sidebar-menu scrollbar-sidebar">

                    <li className="app-sidebar__heading">User Menual</li>

                    <li>
                        <Link href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/dashboard.png" alt="icon" /> Dashboard            </Link>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/epin.png" alt="icon" /> E-pin Recharge                </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/plans.png" alt="icon" /> Plan            </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/bv_log.png" alt="icon" /> Task           </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/referral.png" alt="icon" /> My Referrals            </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/tree.png" alt="icon" /> My Tree            </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <img src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/wallet.png" alt="icon" /> Deposit            </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/withdraw.png" alt="icon" /> Withdraw            </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/transfer.png" alt="icon" /> Balance Transfer                </a>
                    </li>

                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/transactions.png" alt="icon" /> Transactions            </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/ranking.png" alt="icon" /> Ranking                </a>
                    </li>

                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/ticket.png" alt="icon" /> Support Ticket            </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/2fa.png" alt="icon" /> 2FA            </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/profile.png" alt="icon" /> Profile            </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/password.png" alt="icon" /> Change Password            </a>
                    </li>
                    <li>
                        <a href="#" class="">
                            <Image src="https://script.viserlab.com/mlmlab/assets/templates/basic/users/images/icon/logout.png" alt="icon" /> Logout            </a>
                    </li>

                </ul>
            </div>
        </div>

    )
}

export default SideBar
