import React, { useEffect } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import sofa from '../../Assets/Icons/sofa-furniture.png'
import bedroom from '../../Assets/badroom.jpg'
import tvunit from '../../Assets/tv_unit.webp'
import kitchen from '../../Assets/kitchen.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './AllProducts.css'
import officefurniture from '../../Assets/office_furniture.jpeg'
import bookimg from '../../Assets/book-img.svg'
import hotel from '../../Assets/hotel.jpg'
import taxi from '../../Assets/taxi-1.jpg'
import yatra from '../../Assets/yatra.jpg'
import SchoolTours from '../../Assets/schooltour.jpeg'
function AllProduct() {

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
    <div>
      <Breadcrumbs title='Services' />
      <section className='m-top53px' data-aos="fade-up">
        <div className='container'>
          <div className='services'>
            <div>
              <h1>WE PROMISE, YOU WILL HAVE THE BEST
                EXPERIENCE</h1>
              <p>nice travels had its beginning in the fall of 1992, since then we have served couple of thousand customers. We are knows for our professional and on-time services. Almost 3 decades of our services has made us one of the most reputed agents in Palanpur. We have ties with top hotels in the town, we provide combo packages which cover your arrival/departure , lodging, your side seeing and local transportation.<br /><br />
                We aim to be one stop solution for every travel query to our beloved tourists visiting Palanpur.
              </p>
            </div>
            <div>
              <img src={bookimg} width='300' />
            </div>
          </div>
          <div>

          </div>
          <div className='servicestwo'>
            <h1>We got your trip convered!!</h1>
            <div>
              <div className='childservices'>
                <img src={hotel}  width='200' height='200'/>
                <h5>Hotal Booking</h5>
                <p>Stay with us, we got best hotels with best deals
                </p>
              </div>
              <div  className='childservices'>
                <img src={taxi}  width='200' height='200'/>
                <h5>Taxi Service</h5>
                <p>We include wide range of vehicles...
                </p>
              </div>
              <div className='childservices'>
                <img src={SchoolTours}  width='200' height='200'/>
                <h5>School Tours</h5>
                <p>An educational tour places the students...</p>
              </div>
              <div className='childservices'>
                <img src={yatra} width='200' height='200'/>
                <h5>Yatra Tours</h5>
                <p>It is considered the largest open-air theatre in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='m-top53px'>

      </section>
    </div>
  )
}

export default AllProduct