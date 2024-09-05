import React, { useEffect, useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import './Header.css'
import GUJARAT_PANEL_broucher from '../../Assets/GUJARAT PANEL broucher.pdf'
import glogo from '../../Assets/logo.jpg'
import Iso_90012015 from '../../Assets/Iso-9001-2015.png'
import { MdDownload } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";
import { stack as Menu } from 'react-burger-menu'
import { Accordion, styled } from '@mui/material';
import AccordionActions from '@mui/material/AccordionActions';
import { IoCall } from "react-icons/io5";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaHome } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { MdEqualizer } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { PiArrowUpBold } from "react-icons/pi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import bedroom from '../../Assets/badroom.jpg'
import tvunit from '../../Assets/tv_unit.webp'
import kitchen from '../../Assets/kitchen.jpg'
import officefurniture from '../../Assets/office_furniture.jpeg'
import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Checkmark } from 'react-checkmark'
import TranslateComponent from '../TranslateComponent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const CustomAccordion = styled(Accordion)(({ theme }) => ({
    textTransform: 'uppercase',
    left: '-15px',
    boxShadow: 'none',
}));

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const [opencheckcircle, setopencheckcircle] = useState(false);
    const [loading, setloading] = useState(false)
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });


    useEffect(() => {
        AOS.init()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Show the scroll button when the page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    };



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };
    const currentLocation = window.location.href;

    useEffect(() => {

        const links = document.querySelectorAll('.nav-links > ul > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.offcanvas-menu > ul > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.mobile-sub-menu > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active1');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.dropdown-content a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active-sub-menu');
            }
        });

    }, [])


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const products = [
        {
            id: uuidv4(),
            img: bedroom,
            title: 'Bed room'
        },
        {
            id: uuidv4(),
            img: kitchen,
            title: 'Kitchen'
        },
        {
            id: uuidv4(),
            img: tvunit,
            title: 'TV Unit'
        },
        {
            id: uuidv4(),
            img: officefurniture,
            title: 'Office Furniture'
        }
    ]

    return (
        <>
            <header className='header-section'>
                <div className='header-tops'>
                    <div className='container'>
                        <div className='container-child'>
                            <div>
                                <ul className='header-user-menu'>
                                    <li>
                                        <IoIosCall /><a href='tel:+91 9737391044'>+91 9737391044</a>
                                        <a href='tel:+91 9427536115'>+91 9427536115</a>
                                    </li>
                                    <li>
                                        <IoMdMail />
                                        <a href='mailto:nicepathan123@gmail.com'>nicepathan123@gmail.com</a>
                                    </li>


                                </ul>
                            </div>
                            <TranslateComponent />
                        </div>
                    </div>

                </div>
                <div className='header-bottom'>
                    <nav className={isSticky ? 'sticky' : 'navbar'}>
                        <div className='container'>

                            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                                <img src={glogo} width='110px' height='100px' alt='logo not available'></img>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li className="dropdown">
                                        <a href="/Services">Services
                                        </a>
                                    </li>

                                    <li className="dropdown">
                                        <a href="/photos">gallery
                                        </a>
                                    </li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>
                            </div>

                        </div>
                    </nav>
                </div>
            </header>

            <div className="scroll-to-top" data-aos="fade-up">
                {isVisible && (
                    <button onClick={scrollToTop}>
                        <PiArrowUpBold />
                    </button>
                )}
            </div>
            <div className='call'>
                <ul>
                    <li>
                        <a href='tel:+91 9427536115'><IoCall style={{
                            width: '47px',
                            height: '48px',
                            color: '#25d366'
                        }} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='Whatsapp'>
                <ul>
                    <li>
                        <a href='https://api.whatsapp.com/send/?phone=919427536115&text&type=phone_number&app_absent=0' target='_blank'><FaSquareWhatsapp style={{
                            width: '47px',
                            height: '48px',
                            color: '#25d366'
                        }} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mobile-header-section d-block d-lg-none">
                {/* Start Mobile Header Wrapper */}
                <div className="mobile-header-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <div className="mobile-header--left">
                                    <a href="/" className="mobile-logo-link">
                                        <img
                                            src={glogo}
                                            alt="logo not available"
                                            width='63'
                                            className="mobile-logo-img"
                                        />
                                    </a>
                                </div>
                                <Menu>
                                    <div className="offcanvas-mobile-menu-wrapper">
                                        {/* Start Mobile Menu User Top */}
                                        <div className="mobile-menu-top">
                                            <span>
                                                <b>Welcome to Nice Travels</b>
                                            </span>
                                            {/* Start Header Top Menu */}
                                            <ul className="mobile-menu-user-menu">
                                                <li className="header-user-menu-link">
                                                    <IoIosCall />
                                                    <a href="tel:+91 94275 36115" target="_blank">
                                                        <b>+91 94275 36115</b>
                                                    </a>
                                                    <a href="tel:+91 97373 91044" target="_blank">
                                                        <b>+91 97373 91044</b>
                                                    </a>
                                                </li>
                                                <a href="tel:+91 97373 91044"></a>
                                                <li className="header-user-menu-link">
                                                    <IoMdMail />
                                                    <a href="mailto:nicepathan123@gmail.com" target="_blank">
                                                        &nbsp;
                                                    </a>
                                                    <b> nicepathan123@gmail.com</b>
                                                </li>
                                                {/*                <li class="header-user-menu-link"><div id="google_translate_element" class="google_translate_element"></div></li>*/}
                                            </ul>
                                            {/* End Header Top Menu */}
                                        </div>{" "}
                                        {/* End Mobile Menu User Top */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center mt-5">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex justify-content-center mobile-homeTitle d-flex">
                                                        {/*                        <h2>Goodluck</h2>*/}
                                                        {/*                        <h2 style="color: #ea1c26">&nbsp;Pump</h2>*/}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex">
                                                        <img
                                                            className="mobile-isoImg"
                                                            src={glogo}
                                                            alt="Image not available"
                                                            width='100'
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu Bottom */}
                                        <div className="mobile-menu-bottom">
                                            {/* Start Mobile Menu Nav */}
                                            <div className="offcanvas-menu">
                                                <ul>
                                                    <li className="mobileli">

                                                        <a href="/"><FaHome className='fa-icon' />Home</a>
                                                    </li>

                                                    <li className="mobileli">


                                                        <a href='/Services'><AiOutlineAppstore className='fa-icon' />
                                                            Services
                                                        </a>
                                                    </li>


                                                    <li className="mobileli">

                                                        <a href="/about" className="menuBtn">
                                                            <FaCircleInfo className='fa-icon' />
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li className="mobileli">
                                                        <a href="/photos"><GrGallery className='fa-icon' /> gallery</a>
                                                    </li>
                                                    <li className="mobileli">

                                                        <a href="/contact"><MdContactPhone className='fa-icon' />Contact Us</a>
                                                    </li>
                                                </ul>
                                            </div>{" "}
                                            {/* End Mobile Menu Nav */}
                                        </div>{" "}
                                        {/* End Mobile Menu Bottom */}
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div > {" "}
                {/* End Mobile Header Wrapper */}
            </div >
        </>
    )
}

export default Header
