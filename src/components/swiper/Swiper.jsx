import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Category } from '../../utils/category';
import './swiper.css';

const CircleSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
  };

  return (
    <div>
      <Slider {...sliderSettings}>
      {Category.map((category, index) => (
          <div key={index}>
            <div
              style={{
                width: '150px', // Adjust the size of the circle as needed
                height: '150px',
                borderRadius: '50%',
                background: `url(${category.image})`,
                backgroundSize: 'cover',
              }}
            />
            <h1 className='text-lg pl-[26%] font-[Inter]'>{category.category_name}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CircleSlider;
