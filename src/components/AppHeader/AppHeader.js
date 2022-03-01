import React from "react";
import { Outlet, Link } from "react-router-dom";

import * as routes from "../../constants/routes";

function AppHeader({ ...props }) {
  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeclassname="active"
                  to={routes.HOME}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeclassname="active"
                  to={routes.EPISODE}
                >
                  Episode
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeclassname="active"
                  to={routes.CHARACTER}
                >
                  Character
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeclassname="active"
                  to={routes.LOCATION}
                >
                  Location
                </Link>
              </li>
            </ul>
          </nav>
          <Outlet  />
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
