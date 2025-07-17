
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" style={{ padding: '10px', background: 'blue', color: 'white', textDecoration:'none' }}>Go Back</a>

    </div>
  );
};

export default NotFound;
