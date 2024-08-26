import React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <div className="not-found-block">
    <h1>404</h1>
    <p>Oops! The page you're looking for can't be found.</p>
    <Link to="/">
      <button className="home-button">Go Back Home</button>
    </Link>
  </div>
);

export default NotFoundPage;