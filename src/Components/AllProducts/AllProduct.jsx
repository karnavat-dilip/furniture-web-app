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
      <Breadcrumbs title='All Product'/>
      <section className='m-top53px' data-aos="fade-up">
        <div className='container'>
          <div className='grid-container'>
                {
                  products?.map((product,index)=>{
                        return(
                          <a key={product.id} className='product-child' href={`/Allproduct/${index+1}`}>
                            <img src={product.img} width='100'/>
                            <h4>{product.title}</h4>
                          </a>
                        )
                  })
                }
          </div>
        </div>
      </section>
      <section className='m-top53px'>

      </section>
    </div>
  )
}

export default AllProduct