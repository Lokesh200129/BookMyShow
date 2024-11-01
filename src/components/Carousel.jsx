import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/crousel_image/crousel_img1.jpg'
import img2 from '../assets/crousel_image/crousel_img2.jpg'
import img3 from '../assets/crousel_image/crousel_img3.jpg'

function Carousel() {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        variableWidth: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1500,
        cssEase: "linear",
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            centerMode:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            centerMode:false,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            centerMode:false,
            autoplaySpeed: 2500,
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

  return (
    <div className='mt-5 slider-container w-11/12 overflow-hidden  m-auto'>    
        <Slider {...settings}>
            <div  className='m-2 '><img className='h-40 sm:h-60 ' src={img1} alt="" /></div>
            <div  className='m-2 '><img className='h-40 sm:h-60 ' src={img2} alt="" /></div>
            <div  className='m-2 '><img className='h-40 sm:h-60 ' src={img3} alt="" /></div> 
        </Slider>
    </div>   
  )
}

export default Carousel