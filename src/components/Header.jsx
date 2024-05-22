import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Fire Swan Pottery
          </Link>
          <div className="navbar-nav ml-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/products">
              Shop for Pottery
            </Link>
            <a className="nav-link" href="#">
              Private Lessons
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
