'use client';
import { useState, useEffect } from 'react';
import SliderCard from './SliderCard';
import CardImg1 from '@/assets/imgs/cardimg1.png'
import CardImg2 from '@/assets/imgs/cardimg2.png'
import CardImg3 from '@/assets/imgs/cardimg3.png'
import CardImg4 from '@/assets/imgs/cardimg4.png'


const data = [
  {
    title: 'Lucca Bike Tour',
    price: "34",
    day:"EVERY DAY",
    people:"3-10 PP",
    description: 'A tour of the city and its surroundings led by a professional guide ...',
    image: CardImg1.src ,
  },
  {
    title: 'Wine tasting In Tuscany',
    price: "34",
    day:"MONDAY",
    people:"10-30 PP",
    description: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...',
    image: CardImg2.src,
  },
  {
    title: 'Cinque Terre Tour',
    price: "34",
    day:"TO BE DECIDED",
    people:"10-50 PP",
    description: 'Visiting the 5 Terre is a must, and you can never go there enough ...',
    image: CardImg3.src,
  },
  {
    title: 'Siena and Surroundings',
    price: "34",
    day:"TO BE DECIDED",
    people:"5-10 PP",
    description: 'Visit the beautiful Siena and the cities that surround it to experience ...',
    image: CardImg4.src,
  },
  {
    title: 'Lucca Bike Tour',
    price: "34",
    day:"EVERY DAY",
    people:"3-10 PP",
    description: 'A tour of the city and its surroundings led by a professional guide ...',
    image: CardImg1.src ,
  },
  {
    title: 'Wine tasting In Tuscany',
    price: "34",
    day:"MONDAY",
    people:"10-30 PP",
    description: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...',
    image: CardImg2.src,
  },
  {
    title: 'Cinque Terre Tour',
    price: "34",
    day:"TO BE DECIDED",
    people:"10-50 PP",
    description: 'Visiting the 5 Terre is a must, and you can never go there enough ...',
    image: CardImg3.src,
  },
  {
    title: 'Siena and Surroundings',
    price: "34",
    day:"TO BE DECIDED",
    people:"5-10 PP",
    description: 'Visit the beautiful Siena and the cities that surround it to experience ...',
    image: CardImg4.src,
  },
];

const Slider= () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
        if (prevIndex === data.length - 1) {
            return 0; 
        }
        return prevIndex + 1; 
    });
};

const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
        if (prevIndex === 0) {
            return data.length - 1; 
        }
        return prevIndex - 1;
    });
};

  return (
    <div className="flex flex-col px-10 mylg:px-40 3xl:px-63 pt-[123px]">
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between mb-[60px]'>
            <h2 className="text-2xl font-bold">Explore Our Popular Destinations</h2>
            <div className="flex items-center justify-end gap-5 ">
              <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-[50px] h-[50px] flex justify-center items-center z-10 bg-[#EFEFEF] hover:bg-myprimary
                rounded-full ${currentIndex === 0 ? 'opacity-60 cursor-not-allowed' : ''}`}>
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.6" d="M8.5 1L1.5 8L8.5 15" stroke='#333333' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
              <button
              onClick={handleNext}
              disabled={currentIndex === data.length - 1} 
              className={` w-[50px] h-[50px] flex justify-center items-center z-10 bg-[#EFEFEF] hover:bg-myprimary 
                rounded-full ${currentIndex === data.length - 1  ? 'opacity-60 cursor-not-allowed':''}`} >
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1L8.5 8L1.5 15"  stroke='#333333' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
            </div>
        </div>
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"   
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              width: `${(data.length * 100) / visibleCards}%`,
            }}
          >
            {data.map((item, index) => (
              <div key={index} className="w-[330px]" 
              style={{ flexBasis: `${100 / visibleCards}%` }}
              >
                <SliderCard {...item} />
              </div>
            ))}
          </div>
        </div>

      
    </div>
  );
};

export default Slider;
