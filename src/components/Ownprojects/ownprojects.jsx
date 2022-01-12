import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const OwnProjects = () => {
    const content = useSelector((store) => store.content.data);

    return (
        <>
        <div>
        <h2>Your Own Projects</h2>

        <h3>Submit new {content.product_title}</h3>
        <p><span>If you already created a new </span>
        <span>{content.product_title} </span>
        <span>please submit your new </span><br />
        <span><Link to={'/add?type=tlproject'}>{content.product_title} Project</Link></span>
        </p>
        </div>
        </>

    )
};

export default OwnProjects;