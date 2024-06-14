import React, { useEffect } from 'react'
import { FaFacebook, FaInstagramSquare, FaYoutube, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
import glogo from '../../Assets/logo.jpg'
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <footer className='Footer'>
                <div className='container'>
                    <div className='Footer-child' data-aos="fade-down">
                        <div className='section-child' >
                            <div>
                                <img src={glogo} width='150' />
                                <p>We are one of the largest and oldest furniture suppliers in Palanpur since 1991
                                </p>
                                <div className='customer-service'>
                                    <RiCustomerService2Line style={{
                                        width: '45px',
                                        height: '59px'
                                    }} />
                                    <ul>
                                        <li>Customer Support</li>
                                        <li>
                                            <a href="tel:+91 9427064866">+91 94270 64866</a>
                                        </li>
                                        <li>
                                            <a href="tel:+91 8401429751">+91 84014 29751</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <div>
                                <p>We deal in living room furniture, bedroom furniture, garden furniture, dining room furniture, office furniture, and imported furniture. We are also a manufacturer of quality Indian teak wood Furniture.
                                </p>
                                <div className='social-icon-child' style={{
                                    height: 'fitContent',
                                    display: 'contents'
                                }}>
                                    <ul>
                                        <li>

                                            <a href='https://www.facebook.com/'>
                                                <FaFacebook />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.instagram.com/shubhlaxmi_homeinterior?igsh=MXZnd3lrY21qdHhqYQ%3D%3D'>
                                                <FaInstagramSquare />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.youtube.com/'>
                                                <FaYoutube />

                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.linkedin.com/'>
                                                <FaLinkedin />

                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <h3>Sitemap</h3>
                            <ul className='sitemap'>
                                <li>
                                    <a href='/Allproduct'>Our Product</a>
                                </li>
                                <li>
                                    <a href='/about'>About Us</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Mission</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Vision</a>
                                </li>
                                <li>
                                    <a href='/contact'>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className='section-child'>
                            <a href='/contact'>Contact Us</a>
                            <ul className='contactus'>
                                <li>
                                    <b>Shubhlaxmi Furniture</b>
                                </li>
                                <li>
                                Fansia Hill, Three Roads, Kantheria Hanuman Main Road, Palanpur - 385001 (B.K.)
                                </li>
                                <li>
                                    Gujarat(INDIA)385001
                                </li>
                                <li className='contact-link'>
                                    <IoIosCall className='contact-support' /><a href='tel:+91 9427064866'>+919427064866</a>&nbsp;
                                    <a href='tel:+91 8401429751'>8401429751</a>&nbsp;
                                </li>
                                <li className='contact-link'>
                                    <IoMdMail className='contact-support' />
                                    Email Us:
                                </li>
                                <li>
                                    <a style={{
                                        left: '24px',
                                        position: 'relative'
                                    }} href='mailto:shubhlaxmi_homeinterior@gmail.com'>shubhlaxmi_homeinterior@gmail.com</a>
                                </li>

                                <li className='contact-link'>
                                    <TbWorldWww className='contact-support' />
                                    <a href='https://www.ShubhlaxmiFurniture.in'>www.ShubhlaxmiFurniture.in</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='copyright'>
                        <p>Copyright © 2024 Shubhlaxmi PVC Furniture | All Rights Reserved Designed & Developed By <a href='tel:+91 9913448958'style={{color:'black'}}>Karnavat dilip</a></p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer
