import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button1 from './Button1';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="not-found-container">
            <link rel="stylesheet" type="text/css" href="/assets/css/NotFound.css" />

            <div className="not-found-content">

                <h1 className="errorNumber">404</h1>
                <h2 className="errorTitle">Page Not Found</h2>

                <p className="errorDescription">
                    Oops! The page you're looking for seems to have wandered off into the digital void.
                    Don't worry, even the best explorers sometimes take a wrong turn.
                </p>

                <div className="NotFoundButtonContainer">
                    <Link to="/" className="NotFoundHomeButton">
                        <Button1 toggle={handleGoBack} text={"🏠 Go Home"} style={"button2"} />
                    </Link>

                    <Button1 toggle={handleGoBack} text={"← Go Back"} style={"button1"} />
                </div>

            </div>
        </div>
    );
};

export default NotFound;