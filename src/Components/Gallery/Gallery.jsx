// src/Gallery.js
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Gallery.css';
import Breadcrumbs from '../Breadcrumbs';
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
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import img11 from '../../Assets/img11.jpg'
import img12 from '../../Assets/img12.jpg'
import img13 from '../../Assets/img13.jpg'
import img14 from '../../Assets/img14.jpg'
import img15 from '../../Assets/img15.jpg'
import img16 from '../../Assets/img16.jpg'
import img17 from '../../Assets/img17.jpg'
import img18 from '../../Assets/img18.jpg'
import img19 from '../../Assets/img19.jpg'
import img20 from '../../Assets/img1.jpg'
import i1 from '../../Assets/1.jpg'
import i2 from '../../Assets/2.jpg'
import i3 from '../../Assets/3.jpg'
import i4 from '../../Assets/4.jpg'
import i5 from '../../Assets/5.jpg'
import i6 from '../../Assets/6.jpg'
import i7 from '../../Assets/7.jpg'
import i8 from '../../Assets/8.jpg'
import i9 from '../../Assets/9.jpg'
import i10 from '../../Assets/10.jpg'
import i11 from '../../Assets/11.jpg'
import i12 from '../../Assets/12.jpg'
import i13 from '../../Assets/13.jpg'
import i14 from '../../Assets/14.jpg'
import i15 from '../../Assets/15.jpg'
import i16 from '../../Assets/16.jpg'
import i17 from '../../Assets/17.jpg'
import i18 from '../../Assets/18.jpg'
import i19 from '../../Assets/19.jpg'
import i20 from '../../Assets/20.jpg'
import i21 from '../../Assets/21.jpg'
import i22 from '../../Assets/22.jpg'
import i23 from '../../Assets/23.jpg'
import i24 from '../../Assets/24.jpg'
import i25 from '../../Assets/25.jpg'
import i26 from '../../Assets/26.jpg'
import i27 from '../../Assets/27.jpg'
import i28 from '../../Assets/28.jpg'
import i29 from '../../Assets/29.jpg'
import i30 from '../../Assets/30.jpg'
import i31 from '../../Assets/31.jpg'
import i32 from '../../Assets/32.jpg'
import i33 from '../../Assets/33.jpg'
import i34 from '../../Assets/34.jpg'
import i35 from '../../Assets/35.jpg'
import i36 from '../../Assets/36.jpg'
import i37 from '../../Assets/37.jpg'
import i38 from '../../Assets/38.jpg'
import i39 from '../../Assets/39.jpg'
import i40 from '../../Assets/40.jpg'
import i41 from '../../Assets/41.jpg'
import i42 from '../../Assets/42.jpg'
import i43 from '../../Assets/43.jpg'
import i44 from '../../Assets/44.jpg'
import i45 from '../../Assets/45.jpg'
import i46 from '../../Assets/46.jpg'
import i47 from '../../Assets/47.jpg'
import i48 from '../../Assets/48.jpg'
import i49 from '../../Assets/49.jpg'
import i50 from '../../Assets/50.jpg'
import i51 from '../../Assets/51.jpg'
import i52 from '../../Assets/52.jpg'
import i53 from '../../Assets/53.jpg'
import i54 from '../../Assets/54.jpg'
import i55 from '../../Assets/55.jpg'
import i56 from '../../Assets/56.jpg'
import i57 from '../../Assets/57.jpg'
import i58 from '../../Assets/58.jpg'
import i59 from '../../Assets/59.jpg'
import i60 from '../../Assets/60.jpg'
import i61 from '../../Assets/61.jpg'
import i62 from '../../Assets/62.jpg'
import i63 from '../../Assets/63.jpg'
import i64 from '../../Assets/64.jpg'
import i65 from '../../Assets/65.jpg'
import i66 from '../../Assets/66.jpg'
import i67 from '../../Assets/67.jpg'
import i68 from '../../Assets/68.jpg'
import i69 from '../../Assets/69.jpg'
import i70 from '../../Assets/70.jpg'
import i71 from '../../Assets/71.jpg'
import i72 from '../../Assets/72.jpg'
import i73 from '../../Assets/73.jpg'
import i74 from '../../Assets/74.jpg'
import i75 from '../../Assets/75.jpg'
import i76 from '../../Assets/76.jpg'
import i77 from '../../Assets/77.jpg'
import i78 from '../../Assets/78.jpg'
import i79 from '../../Assets/79.jpg'
import i80 from '../../Assets/80.jpg'
import i81 from '../../Assets/81.jpg'
import i82 from '../../Assets/82.jpg'
import i83 from '../../Assets/83.jpg'
import i84 from '../../Assets/84.jpg'
import i85 from '../../Assets/85.jpg'
import i86 from '../../Assets/86.jpg'
import i87 from '../../Assets/87.jpg'
import i88 from '../../Assets/88.jpg'
import i89 from '../../Assets/89.jpg'
import i90 from '../../Assets/90.jpg'
import i91 from '../../Assets/91.jpg'

const images = [
  i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20,i21,i22,i23,i24,i25,i26,i27,i28,i29,i30,i31,i32,i33,i34,i35,i36,i37,i38,i39,i40,i41,i42,i43,i44,i45,i46,i47,i48,i49,i50,i51,i52,i53,i54,i55,i56,i57,i58,i59,i60,i61,i62,i63,i64,i65,i66,i67,i68,i69,i70,i71,i72,i73,i74,i75,i76,i77,i78,i79,i80,i81,i82,i83,i84,i85,i86,i87,i88,i89,i90,i91,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20, tv1, tv2, tv3, tv4, tv5, tv6, tv7, tv8, tv9, tv10, tv11, tv12, tv13, tv14, tv15, tv16, tv17,
  Kitchen1, Kitchen2, Kitchen3, Kitchen4, Kitchen5, Kitchen6, Kitchen7, Kitchen8, Kitchen9, Kitchen10, Kitchen11, Kitchen12, Kitchen13, Kitchen14, Kitchen15, Kitchen16, Kitchen17, Kitchen18,
  bed1, bed2, bed3, bed4, bed5, bed6, bed7, bed8, bed9, bed10, bed11, bed12, bed13, bed14, bed15, bed16, bed17, bed18, bed19, bed20, bed21
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <Breadcrumbs title='Photos' />
      <section className='m-top53px'>
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
      </section>
    </div>
  );
};

export default Gallery;
