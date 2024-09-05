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
                                <p>Best Taxi Services in Palanpur for exploring local or outstation cities Let us talk about why we are the best taxi services in Palanpur and the only car rental in Palanpur that assures safety of you fully.


                                </p>
                                <div className='customer-service'>
                                    <RiCustomerService2Line style={{
                                        width: '45px',
                                        height: '59px'
                                    }} />
                                    <ul>
                                        <li>Customer Support</li>
                                        <li>
                                            <a href="tel:+91 9427536115">+91 9427536115</a>
                                        </li>
                                        <li>
                                            <a href="tel:+91 9737391044">+91 9737391044</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <div>
                                <p>Best Taxi Services in Palanpur for exploring local or outstation cities Let us talk about why we are the best taxi services in Palanpur and the only car rental in Palanpur that assures safety of you fully. Our commitment to be the best taxi rentals have helped in giving best services that a client expects from any taxi services in Palanpur.
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

                                            <a href='https://www.instagram.com/'>
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
                                    <a href='/Services'>Our Services</a>
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
                                    <b>Nice Travels</b>&nbsp;
                                </li>
                                <li>
                                Railway Station Rd, Chaman Bagh, Palanpur, Gujarat 385001
                                </li>
                                <li>
                                    Gujarat(INDIA)385001
                                </li>
                                <li className='contact-link'>
                                    <IoIosCall className='contact-support' /><a href='tel:+91 9427536115'>+919427536115</a>&nbsp;
                                    <a href='tel:+91 9737391044'>9737391044</a>&nbsp;
                                </li>
                                <li className='contact-link'>
                                    <IoMdMail className='contact-support' />
                                    Email Us:
                                </li>
                                <li>
                                    <a style={{
                                        left: '24px',
                                        position: 'relative'
                                    }} href='mailto:nicepathan123@gmail.com'>nicepathan123@gmail.com</a>
                                </li>

                                <li className='contact-link'>
                                    <TbWorldWww className='contact-support' />
                                    <a href='https://www.nicetravels.vercel.app'>www.nicetravels.vercel.app</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='copyright'>
                        <p>Copyright © 2024 Nice Travels | All Rights Reserved Designed & Developed By <a href='tel:+91 9913448958'style={{color:'black'}}>Karnavat dilip</a></p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer
