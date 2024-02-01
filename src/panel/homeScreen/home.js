import React, { useState, useEffect } from 'react'
import UiTheme from './uitheme'
import NavBarComponent from './navbar'
import SideBar from './sidebar'
import MainCompnent from './main'
import BankTransfer from './component/BankTransfer'



const Home = () => {




    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

            <NavBarComponent />

            <UiTheme />
            <div className="app-main">
                <SideBar />
                <div className="app-main__outer">
                    <MainCompnent />
                </div>

            </div>
        </div>
    )
}

export default Home
