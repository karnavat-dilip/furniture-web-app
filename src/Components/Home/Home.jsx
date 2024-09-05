import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import sofaimg from '../../Assets/about-pic.jpg'
import Banner4 from '../../Assets/palanpurTaxi.jpeg'
import Banner5 from '../../Assets/palanpurhotel.jpeg'
import sofa from '../../Assets/Icons/sofa-furniture.png'
import Banner03 from '../../Assets/call-support.png'
import bedroom from '../../Assets/ertiga.webp'
import tvunit from '../../Assets/swift.webp'
import kitchen from '../../Assets/Kia_Carens.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaCarAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import officefurniture from '../../Assets/Tempo_Traveller.webp'
import toyatainnovacrysta from '../../Assets/innovacrysta.webp'
import innova from '../../Assets/toyotainnova.webp'
import tavera from '../../Assets/tavera.jpg'
import etios from '../../Assets/etios.jpg'
import { Accordion, styled } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo1 from '../../Assets/logo1.jpg'
import testy1 from '../../Assets/testi1.jpg'
import testy2 from '../../Assets/testi2.jpg'
import testy3 from '../../Assets/testi3.jpg'
import logo3 from '../../Assets/logo3.jpg'
import logo4 from '../../Assets/logo4.jpg'
import logo5 from '../../Assets/logo5.jpg'
import logo7 from '../../Assets/logo7.jpg'
import logo8 from '../../Assets/logo8.jpg'
import logo9 from '../../Assets/logo9.jpg'
import logo10 from '../../Assets/logo10.jpg'
import logo11 from '../../Assets/logo11.jpg'
import logo12 from '../../Assets/logo12.jpg'
import logo13 from '../../Assets/logo13.jpg'
import 'animate.css';

function AboutUs() {
  return (
    <div>
      <p>Best Taxi Services in Palanpur for exploring local or outstation cities Let us talk about why we are the best taxi services in Palanpur and the only car rental in Palanpur that assures safety of you fully. Our commitment to be the best taxi rentals have helped in giving best services that a client expects from any taxi services in Palanpur.
        <a href='/about' style={{ color: 'red' }}>Read more...</a></p>
    </div>
  );
}

function OurStrength() {
  return (
    <div>
      <p>Taxis should be readily available at all times, including during peak hours and in less populated areas.

        <a href='/about' style={{ color: 'red' }}>Read more...</a></p>
    </div>
  );
}

function OurService() {
  return (
    <div>
      <p>Reliable and convenient transportation services, including standard rides, airport transfers, and specialized options, tailored to meet diverse customer needs.

        <a href='/about' style={{ color: 'red' }}>Read more...</a></p>
    </div>
  );
}


function Home() {
  const [counteron, setcounteron] = useState(false)
  const [content, setContent] = useState(AboutUs);
  const [activeLink, setActiveLink] = useState('about');

  const handleNavigation = (contentComponent, linkName) => {
    setContent(contentComponent);
    setActiveLink(linkName)
  };

  useEffect(() => {
    AOS.init()
  }, [])

  const products = [
    {
      id: uuidv4(),
      img: bedroom,
      title: 'Hire Ertiga Taxi',
      rate: {
        nonac: '12Rs KM Non AC',
        ac: '13Rs KM with AC'
      }
    },
    {
      id: uuidv4(),
      img: kitchen,
      title: 'Kia Carens',
      rate: {
        nonac: '15Rs KM Non AC',
        ac: '16Rs KM with AC'
      }
    },
    {
      id: uuidv4(),
      img: tvunit,
      title: 'Hire Dzire Taxi',
      rate: {
        nonac: '10Rs KM Non AC',
        ac: '11Rs KM with AC'
      }
    },
    {
      id: uuidv4(),
      img: officefurniture,
      title: 'Tempo Traveller',
      rate: {
        nonac: '25Rs KM Non AC',
        ac: '26Rs KM with AC'
      }
    },
    {
      id: uuidv4(),
      img: toyatainnovacrysta,
      title: 'Toyata Innova Crysta',
      rate: {
        nonac: '16Rs KM Non AC',
        ac: '17Rs KM with AC'
      }
    },
    {
      id: uuidv4(),
      img: innova,
      title: 'Hire Toyata Innova',
      rate: {
        nonac: '14Rs KM Non AC',
        ac: '15Rs KM with AC'
      }
    },
    {
      id: uuidv4(),
      img: etios,
      title: 'Hire Etios Taxi',
      rate: {
        nonac: '10Rs KM Non AC',
        ac: '11Rs KM with AC'
      }
    },
    {
      id: uuidv4(),
      img: tavera,
      title: 'Hire Tavera Taxi',
      rate: {
        nonac: '13Rs KM Non AC',
        ac: '14Rs KM with AC'
      }
    }
  ]



  return (
    <>
      <div className='swiper-container'>
        <section className='slide' data-aos="flip-left">
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide><img src={Banner4} id='img1' />
                <div className='bannertext'>
                  <h1 className='animate__animated animate__backInDown'>Need A Taxi?</h1>

                  <a href='tel:+91 9427536115' className='animate__animated animate__backInUp'>Call now</a>

                </div>
              </SwiperSlide>
              <SwiperSlide><img src={Banner5} id='img2' />
                <div className='bannertext'>
                  <h1 className='animate__animated animate__backInDown'>lodging with great DEALS !!</h1>

                  <a href='tel:+91 9427536115' className='animate__animated animate__backInUp'>Call now</a>

                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Welcome to Nice Travels</h1>
            </div>
            <div className='intro'>
              <div className='d-flex'>
                <div>
                  <h4>Introduction</h4>
                  <p>Best Taxi Services in Palanpur for exploring local or outstation cities Let us talk about why we are the best taxi services in Palanpur and the only car rental in Palanpur that assures safety of you fully. Our commitment to be the best taxi rentals have helped in giving best services that a client expects from any taxi services in Palanpur.</p>

                </div>
                <div>
                  <img src={sofaimg} id='profile-img' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'><h1>OUR SERVICES</h1></div>
            <div className='product-container'>
              <Swiper

                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}

              >
                {
                  products?.map((product, index) => {
                    return (
                      <SwiperSlide key={product.id} className='swiper-child'>
                        {/* <div key={product.id} className='swiper-child'> */}
                        <img src={product.img} width='100px' height='100px' />
                        <h3>{product.title}</h3>
                        <FaCarAlt />
                        <p>{product.rate.nonac}</p>
                        <p>{product.rate.ac}</p>
                        <a href='tel:+91 9427536115'>
                          <IoIosCall /> Call Now
                        </a>
                        {/* </div> */}
                      </SwiperSlide>

                    )
                  })
                }
              </Swiper>
            </div>

          </div>
        </section >
        <section data-aos="fade-up" style={{ padding: '2%' }}>
          <div className='container'>
            <div className='count-container'>
              <div className='totalno'>

                {<CountUp start={0} end={2200} duration={2} delay={0} />}+

                <h4>Happay Clients</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={22} duration={5} delay={0} />}+

                <h4>Our Experience</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={17} duration={5} delay={0} />}+

                <h4>Total taxi</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={12} duration={5} delay={0} />}+

                <h4>Total Achivements</h4>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='nav-container'>
              <div className='b-btm'>
                <h1>Who we are?</h1>
              </div>
              <div>
                <nav>
                  <ul>
                    <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(AboutUs, 'about')}>About Us</li>
                    <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                    <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='text-indent'>

              {content && content}

            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={Banner03} style={{width:'-webkit-fill-available'}} />
            </div>
          </div>
        </section>


        <section style={{ padding: '2%' }}>

        </section>
      </div >
    </>
  )
}

export default Home
