import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import stardelta from '../../Assets/14611_stardelta.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';
import { IoBarChartSharp } from "react-icons/io5";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import { IoFlaskSharp } from "react-icons/io5";
import Value from '../../Assets/values.jpg'
import OurMission from '../../Assets/mission.jpg'
import OurVision from '../../Assets/vision.jpg'
import about from '../../Assets/office_img.jpg'
import TaTa from '../../Assets/testi1.jpg'
import reliance from '../../Assets/testi2.jpg'
import wasmo from '../../Assets/testi3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './About.css'
function About() {
    return (
        <div>
            <p>Best Taxi Services in Palanpur for exploring local or outstation cities Let us talk about why we are the best taxi services in Palanpur and the only car rental in Palanpur that assures safety of you fully. Our commitment to be the best taxi rentals have helped in giving best services that a client expects from any taxi services in Palanpur.
            </p>
        </div>
    );
}

function OurStrength() {
    return (
        <div>
            <p>Taxis should be readily available at all times, including during peak hours and in less populated areas.</p>
        </div>
    );
}

function OurService() {
    return (
        <div>
            <p>Reliable and convenient transportation services, including standard rides, airport transfers, and specialized options, tailored to meet diverse customer needs.</p>
        </div>
    );
}
function AboutUs() {
    const [content, setContent] = useState(About);
    const [activeLink, setActiveLink] = useState('about');

    const handleNavigation = (contentComponent, linkName) => {
        setContent(contentComponent);
        setActiveLink(linkName)
    };
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <Breadcrumbs title='About Us' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='about-container'>

                        <div className='second-child' data-aos="fade-up">
                            <h1>Welcome To Nice Travels</h1>
                            <p>Best Taxi Services in Palanpur for exploring local or outstation cities Let us talk about why we are the best taxi services in Palanpur and the only car rental in Palanpur that assures safety of you fully. Our commitment to be the best taxi rentals have helped in giving best services that a client expects from any taxi services in Palanpur.</p>
                        </div>

                        <div data-aos="fade-up">
                            <div className='nav-container'>
                                <div className='b-btm'>
                                    <h1>Who we are?</h1>
                                </div>
                                <div>
                                    <nav>
                                        <ul>
                                            <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(About, 'about')}>About Us</li>
                                            <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                                            <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className='text-indent'>

                                {content && content}

                            </div>
                        </div>
                        <div className='ourmission' data-aos="fade-up">
                            <div>
                                <img src={Value} width='100' />

                                <h2>Value</h2>
                                <p>
                                    Professional drivers with thorough knowledge of traffic regulations and local areas ensure a safe travel experience.
                                </p>
                            </div>
                            <div>
                                <img src={OurMission} width='100' />


                                <h2>Our Mission
                                </h2>
                                <p>
                                    Our mission is to deliver exceptional taxi services through a commitment to customer satisfaction, safety, and innovation. We aim to provide convenient and dependable transportation solutions that cater to the diverse needs of our community while fostering a culture of excellence and sustainability.
                                </p>
                            </div>
                            <div>
                                <img src={OurVision} width='100' />

                                <h2>Our Vision</h2>
                                <p>
                                    To be the leading provider of safe, reliable, and efficient transportation services, revolutionizing urban mobility and enhancing the quality of life for our customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
