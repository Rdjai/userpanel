import React, { useState } from 'react'
import UiTheme from './uitheme'
import NavBarComponent from './navbar'
import SideBar from './sidebar'
import MainCompnent from './main'


const Home = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderContent = () => {
        switch (currentPage) {
            case 'Dashboard':
                return <MainCompnent />;
            // case 'about':
            //     return <About />;
            // case 'contact':
            //     return <Contact />;
            // default:
            //     return null;
        }
    };
    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

            <NavBarComponent />

            <UiTheme />
            <div className="app-main">
                <SideBar />
                <MainCompnent />
            </div>
        </div>
    )
}

export default Home
