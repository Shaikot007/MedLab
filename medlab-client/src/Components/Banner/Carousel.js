import React, { useState } from "react";
import './Carousel.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

import Banner1 from '../../Images/Banner/banner_hero_1.jpg';
import Banner2 from '../../Images/Banner/banner_hero_2.jpg';

const items = [
  {
    src: Banner1,
    caption: 'Book Lab Test From The Comfort Of Your Home',
    altText: 'Our skilled doctors have tremendous experience with wide range of diseases to serve the needs of our patients.'
  },
  {
    src: Banner2,
    caption: 'Doctors who treat with care',
    altText: 'Our skilled doctors have tremendous experience with wide range of diseases to serve the needs of our patients.'
  }
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={"Banner"} style={{ height: '550px', width: '100%' }} />
        <div className='TextCont'>
          <CarouselCaption captionHeader={item.caption} captionText={item.altText} />
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel className="CarouselArea"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Banner;
