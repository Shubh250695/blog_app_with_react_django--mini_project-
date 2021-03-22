import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className="container">
        <div className="jumbotron align-items-center mx-auto mt-5">
            <h1 className="display-4">Welcome to Blog App..!!</h1>
            <p className="lead">We make everyone to express themself with awesome blog on various topics.</p>
            <hr className="my-4" />
            {/* <p>Sign Up to check out our awesome blogs.</p> */}
            <p>Check out our awesome blogs.</p>
            {/* <Link className="btn btn-primary btn-lg" exact to="/signup" role="button">Sign Up</Link> */}
            <Link className="btn btn-primary btn-lg" exact to="/blog" role="button">Blogs</Link>
        </div>
    </div>
    
);

export default home;