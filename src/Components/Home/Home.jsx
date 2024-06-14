import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import sofaimg from '../../Assets/badroom.jpg'
import Banner4 from '../../Assets/banner4.jpg'
import Banner5 from '../../Assets/banner5.jpg'
import sofa from '../../Assets/Icons/sofa-furniture.png'
import Banner03 from '../../Assets/Banner05.jpg'
import bedroom from '../../Assets/badroom.jpg'
import tvunit from '../../Assets/tv_unit.webp'
import kitchen from '../../Assets/kitchen.jpg'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import officefurniture from '../../Assets/office_furniture.jpeg'
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


function AboutUs() {
  return (
    <div>
      <p>We are one of the largest and oldest furniture suppliers in Palanpur since 1991. We are one of the best wooden and steel furniture suppliers in Palanpur. We deal in living room furniture, bedroom furniture, garden furniture, dining room furniture, office furniture, and imported furniture. We are also a manufacturer of quality Indian teak wood Furniture.

        <a href='/about' style={{ color: 'red' }}>Read more...</a></p>
    </div>
  );
}

function OurStrength() {
  return (
    <div>
      <p>Having earned a recommendable position in the industry for providing innovative, high-quality Kerala furniture at a reasonable cost, our organization is fostered with a skilled team of professionals who make their sincere effort towards the growth of the company.

        <a href='/about' style={{ color: 'red' }}>Read more...</a></p>
    </div>
  );
}

function OurService() {
  return (
    <div>
      <p>We have been trusted to layout the furniture including space planning for our customers because of our experienced, knowledge and passionate team in furniture.

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
              <SwiperSlide><img src={Banner4} id='img1' /></SwiperSlide>
              <SwiperSlide><img src={Banner5} id='img2' /></SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Welcome to Shubhlaxmi PVC Furniture</h1>
            </div>
            <div className='intro'>
              <div className='d-flex'>
                <div>
                  <h4>Introduction</h4>
                  <p>We are one of the largest and oldest furniture suppliers in Palanpur since 1991.</p>
                  <h4>Unlock the full potential of Home Interior
                  </h4>
                  <p>We deal with wooden furniture with the latest collection in the category of home and office furniture which will give your interior an extraordinary look
                  </p>
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
            <div className='h1-container'><h1>Product Category</h1></div>
            <div className='product-container'>
              <Swiper

                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 300,
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
                modules={[Autoplay, Pagination, Navigation]}

              >
                {
                  products?.map((product, index) => {
                    return (
                      <SwiperSlide key={product.id} className='swiper-child'>
                        {/* <div key={product.id} className='swiper-child'> */}
                        <a href={`/Allproduct/${index + 1}`}>
                          <img src={product.img} width='100px' height='100px' />
                          <h3>{product.title}</h3>
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

                {<CountUp start={0} end={2250} duration={5} delay={0} />}+

                <h4>Total Projects</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={170} duration={5} delay={0} />}+

                <h4>Total Product</h4>
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
            <div>
              <img src={Banner03} style={{ width: '100%' }} />
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
