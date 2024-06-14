import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.ripples';
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import './Breadcrumbs.css'
const Breadcrumbs = ({ title,type }) => {
    const rippleRef = useRef(null);

    useEffect(() => {
        // Initialize ripples on the element when the component mounts
        $(rippleRef.current).ripples({
            resolution: 512,
            dropRadius: 5,
            perturbance: 0.90,
        });

        // Cleanup the ripples effect on component unmount
        return () => {
            $(rippleRef.current).ripples('destroy');
        };
    }, []);

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    let breadcrumbPath = "";

    return (
        <section className="b-crumb-container" ref={rippleRef}>
            <div className="container">
                <div className="b-child">

                    <h1>{title}</h1>

                    <div className="breadcrumbs">
                        {pathnames.length > 0 && <Link to="/"><FaHome style={{fontSize: 'x-large',
    height: '19px'}}/></Link>}
                        {pathnames.map((name, index) => {
                            breadcrumbPath += `/${name}`;
                            const isLast = index === pathnames.length - 1;
                            console.log(pathnames, breadcrumbPath);

                            return isLast ? (
                                <span key={breadcrumbPath}>  {`>> ${pathnames.length>1? type:name}`}</span>
                            ) : (
                                <span key={breadcrumbPath}>
                                    {" "}
                                    <Link to={breadcrumbPath}>{`>> ${name}`}</Link>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumbs;