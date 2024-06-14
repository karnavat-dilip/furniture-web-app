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
            <p>We are one of the largest and oldest furniture suppliers in Palanpur since 1991.
                We are one of the best wooden and steel furniture suppliers in Palanpur.
                We deal in living room furniture, bedroom furniture, garden furniture, dining room furniture, office furniture, and imported furniture. We are also a manufacturer of quality Indian teak wood Furniture.
            </p>
        </div>
    );
}

function OurStrength() {
    return (
        <div>
            <p>Having earned a recommendable position in the industry for providing innovative, high-quality Kerala furniture at a reasonable cost, our organization is fostered with a skilled team of professionals who make their sincere effort towards the growth of the company.</p>
        </div>
    );
}

function OurService() {
    return (
        <div>
            <p>We have been trusted to layout the furniture including space planning for our customers because of our experienced, knowledge and passionate team in furniture.</p>
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
                        <div data-aos="fade-up">
                            <img src={about} />
                        </div>
                        <div className='second-child' data-aos="fade-up">
                            <h1>We convert your idea into a reality</h1>
                            <p>We are one of the largest and oldest furniture suppliers in Palanpur since 1991.
                                We are one of the best wooden and steel furniture suppliers in Palanpur.
                                We deal in living room furniture, bedroom furniture, garden furniture, dining room furniture, office furniture, and imported furniture. We are also a manufacturer of quality Indian teak wood Furniture.</p>
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
                                    We have earned clients’ trust with reliable service and quality products. We accept the consequences of our actions as a sign of responsibility. Our professionalism can be viewed through flawless service and high-end products.
                                </p>
                            </div>
                            <div>
                                <img src={OurMission} width='100' />


                                <h2>Our Mission
                                </h2>
                                <p>

                                    "We strive in improving the quality of life of the communities We serve, through leadership and global competitiveness in the business sectors in which we operate".
                                    To offer a range of products at affordable Kerala furniture price, which adds to the comfort of life through manual labor, time and energy, or for entertainment.
                                </p>
                            </div>
                            <div>
                                <img src={OurVision} width='100' />

                                <h2>Our Vision</h2>
                                <p>
                                    Committed to honesty and fairness to achieve a leadership position in all core business areas.
                                    Utilize the best and most appropriate technologies.
                                    Apply the finest manufacturing disciplines.
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
