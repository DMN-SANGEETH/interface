import React from "react";
import IssueAddComponent from "./IssueAddComponent";

function HedarComponent(){
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-warning" style={{ backgroundColor: "#f0ad4e" }}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Bug-Tracking System</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/Home">Home </a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-expand-lg navbar-light ">
                        <IssueAddComponent />
                    </div>

                </nav>
            </header>
        </div>
    )
}
export default HedarComponent;