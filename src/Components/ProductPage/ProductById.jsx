import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Breadcrumbs from '../Breadcrumbs'
import bed1 from '../../Assets/bed1.jpg'
import bed2 from '../../Assets/bed2.jpg'
import bed3 from '../../Assets/bed3.jpg'
import bed4 from '../../Assets/bed4.jpg'
import bed5 from '../../Assets/bed5.jpg'
import bed6 from '../../Assets/bed6.jpg'
import bed7 from '../../Assets/bed7.jpg'
import bed8 from '../../Assets/bed8.jpg'
import bed9 from '../../Assets/bed9.jpg'
import bed10 from '../../Assets/bed10.jpg'
import bed11 from '../../Assets/bed11.jpg'
import bed12 from '../../Assets/bed12.jpg'
import bed13 from '../../Assets/bed13.jpg'
import bed14 from '../../Assets/bed14.jpg'
import bed15 from '../../Assets/bed15.jpg'
import bed16 from '../../Assets/bed16.jpg'
import bed17 from '../../Assets/bed17.jpg'
import bed18 from '../../Assets/bed18.jpg'
import bed19 from '../../Assets/bed19.jpg'
import bed20 from '../../Assets/bed20.jpg'
import bed21 from '../../Assets/bed21.jpg'
import Kitchen1 from '../../Assets/Kitchen1.jpg'
import Kitchen2 from '../../Assets/Kitchen2.jpg'
import Kitchen3 from '../../Assets/Kitchen3.jpg'
import Kitchen4 from '../../Assets/Kitchen4.jpg'
import Kitchen5 from '../../Assets/Kitchen5.jpg'
import Kitchen6 from '../../Assets/Kitchen6.jpg'
import Kitchen7 from '../../Assets/Kitchen7.jpg'
import Kitchen8 from '../../Assets/Kitchen8.jpg'
import Kitchen9 from '../../Assets/Kitchen9.jpg'
import Kitchen10 from '../../Assets/Kitchen10.jpg'
import Kitchen11 from '../../Assets/Kitchen11.jpg'
import Kitchen12 from '../../Assets/Kitchen12.jpg'
import Kitchen13 from '../../Assets/Kitchen13.jpg'
import Kitchen14 from '../../Assets/Kitchen14.jpg'
import Kitchen15 from '../../Assets/Kitchen15.jpg'
import Kitchen16 from '../../Assets/Kitchen16.jpg'
import Kitchen17 from '../../Assets/Kitchen17.jpg'
import Kitchen18 from '../../Assets/Kitchen18.jpg'
import tv1 from '../../Assets/tv1.jpg'
import tv2 from '../../Assets/tv2.jpg'
import tv3 from '../../Assets/tv3.jpg'
import tv4 from '../../Assets/tv4.jpg'
import tv5 from '../../Assets/tv5.jpg'
import tv6 from '../../Assets/tv6.jpg'
import tv7 from '../../Assets/tv7.jpg'
import tv8 from '../../Assets/tv8.jpg'
import tv9 from '../../Assets/tv9.jpg'
import tv10 from '../../Assets/tv10.jpg'
import tv11 from '../../Assets/tv11.jpg'
import tv12 from '../../Assets/tv12.jpg'
import tv13 from '../../Assets/tv13.jpg'
import tv14 from '../../Assets/tv14.jpg'
import tv15 from '../../Assets/tv15.jpg'
import tv16 from '../../Assets/tv16.jpg'
import tv17 from '../../Assets/tv17.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import img11 from '../../Assets/img11.jpg'
import img12 from '../../Assets/img12.jpg'
import img13 from '../../Assets/img13.jpg'
import img14 from '../../Assets/img14.jpg'
import img15 from '../../Assets/img15.jpg'
import sofa from '../../Assets/Icons/sofa-furniture.png'
import bed from '../../Assets/Icons/bednew.png'
import bedroom from '../../Assets/badroom.jpg'
import tvunit from '../../Assets/tv_unit.webp'
import kitchen from '../../Assets/kitchen.jpg'
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './ProductById.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import officefurniture from '../../Assets/office_furniture.jpeg'
function ProductById() {
    const { id } = useParams();
    const productId = parseInt(id);
    const [product, setProduct] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    useEffect(() => {
        AOS.init()
    }, [])

    const productsData = {
        "panels": [
            {
                "id": 4,
                "type": "Office Furniture",
                "images": [
                    img8,img9,img10,img11,img12,img13,img14,img15,
                ]
            },
            {
                "id": 3,
                "type": "TV Unit",
                "images": [
                    tv1, tv2, tv3, tv4, tv5, tv6, tv7, tv8, tv9, tv10, tv11, tv12, tv13, tv14, tv15, tv16, tv17
                ]
            },
            {
                "id": 2,
                "type": "Kitchen",
                "images": [
                    Kitchen1, Kitchen2, Kitchen3, Kitchen4, Kitchen5, Kitchen6, Kitchen7, Kitchen8, Kitchen9, Kitchen10, Kitchen11, Kitchen12, Kitchen13, Kitchen14, Kitchen15, Kitchen16, Kitchen17, Kitchen18,
                ]
            },
            {
                "id": 1,
                "type": "Bed room",
                "images": [
                    bed1, bed2, bed3, bed4, bed5, bed6, bed7, bed8, bed9, bed10, bed11, bed12, bed13, bed14, bed15, bed16, bed17, bed18, bed19, bed20, bed21
                ]
            }
        ]
    }
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

    useEffect(() => {

        const foundProduct = productsData.panels.find(item => item.id === productId);
        setProduct(foundProduct);
    }, [productId]);


    const { images, type, img, description, features, specifications, other_info } = product || {};

    return (
        <>
            <Breadcrumbs title='Product Details Default' type={type} />
            <section className='m-top53px'>
                <div>
                    <div>
                        {product ? (
                            <div className='container'>
                                <div className="gallery">
                                    {images.map((src, index) => (
                                        <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
                                            <LazyLoadImage
                                                className='lazy'
                                                effect="blur"
                                                src={src}
                                                alt={`Gallery ${index}`}
                                            />
                                        </div>
                                    ))}

                                    {isOpen && (
                                        <Lightbox
                                            mainSrc={images[photoIndex]}
                                            nextSrc={images[(photoIndex + 1) % images.length]}
                                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                            onCloseRequest={() => setIsOpen(false)}
                                            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                                            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                                        />
                                    )}
                                </div>
                            </div>
                        ) : (
                            <p>Product not found</p>
                        )}
                    </div>
                </div>
            </section>
            <section data-aos="fade-up">
                <div className='container'>
                    <div className='h1-container'><h1>Related Products</h1></div>
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
            <section className='m-top53px'>

            </section>
        </>
    )
}

export default ProductById
