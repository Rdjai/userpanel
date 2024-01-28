import React, { useState, useEffect } from 'react'
import UiTheme from './uitheme'
import NavBarComponent from './navbar'
import SideBar from './sidebar'
import MainCompnent from './main'
import BankTransfer from './component/BankTransfer'
import parse from 'url-parse';


const Home = () => {

    const [parsedUrl, setParsedUrl] = useState(null);

    // Effect to parse the URL on mount
    useEffect(() => {
        // Get the current window location
        const currentUrl = window.location.href;

        // Parse the URL
        const parsed = parse(currentUrl, true);

        // Set the parsed URL in the state
        setParsedUrl(parsed.pathname);
    }, []);
    console.log(parsedUrl);

    const renderContent = () => {
        switch (parsedUrl) {
            case "/":
                return <MainCompnent />;
            case 'BankTransfer':
                return <BankTransfer />;
            default:
                return null;
        }
    };



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
