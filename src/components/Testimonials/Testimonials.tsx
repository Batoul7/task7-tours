'use client'
import { useEffect, useState } from 'react';
import person from '@/assets/imgs/Ellipse 4.png';
import Image from 'next/image';
import quote from '@/assets/svg/Asset 16 1.svg'

interface Testimonial {
    name: string;
    text: string;
    image: string;
}

const data: Testimonial[] = [
    {
        name: "Lyod Gomez",
        text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
        image: person.src,
    },
    {
        name: "Lyod Gomez",
        text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
        image: person.src,
    },
    {
        name: "Lyod Gomez",
        text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
        image: person.src,
    },
    {
        name: "Lyod Gomez",
        text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
        image: person.src,
    },
    {
        name: "Lyod Gomez",
        text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
        image: person.src,
    },
    {
        name: "Lyod Gomez",
        text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
        image: person.src,
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
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
        <div className="pt-[123px] flex flex-col px-10 mylg:px-40 3xl:px-63 pb-[160px]">
            <div className='flex flex-col md:flex-row gap-4 items-center justify-between mb-[60px]'>
                <h2 className="text-2xl font-bold">Happy Customers Says</h2>
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
            <div className="overflow-hidden flex gap-5 py-5">
                    {data.map((testimonial, index) => (
                        <div
                            key={index}
                            className=" transition-transform duration-500 ease-in-out
                            w-[700px] h-[406px] rounded-3xl border border-[#EFEFEF] p-7.5 bg-white flex flex-col items-center text-center"
                            style={{
                                transform: `translateX(-${currentIndex * 700}px)`,
                                transition: "transform 0.7s ease-out",
                                width: `${(data.length * 100) / visibleCards}%`,
                                flex: `0 0 ${100 / visibleCards}%`,
                                maxWidth: `${100 / visibleCards}%`,
                            }}
                        >
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={80}
                                height={80}
                                className=" rounded-full mb-[15px]"
                            />
                            <h3 className="text-lg text-mygray">{testimonial.name}</h3>
                            <Image src={quote} alt='quote' width={40} height={28} className='mr-auto'/>
                            <p className="text-lg text-mygray leading-7.5 my-3.5">{testimonial.text}</p>
                            <Image src={quote} alt='quote' width={40} height={28} className='ml-auto'/>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Testimonials;
