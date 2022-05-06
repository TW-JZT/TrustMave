import React from "react";
import LogInBox from "../StyleSheets/LogInBox.css";
import Header from "../components/Header.js"
import { Link } from "react-router-dom";

export const CheckEmailPage = props => {
    return (
        <body>
            <div className="LogInBox">
                <Header/>
                <h1 className="Heading">This is a mock application, so no password reset link was actually sent.</h1>
                <Link to={'/home'} className="link"> Go home </Link>
            </div>
        </body>
    )
}