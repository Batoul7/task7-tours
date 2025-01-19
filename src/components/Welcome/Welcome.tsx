import React from 'react'
import Counter from '../Counter/Counter';
import Image from 'next/image';
import { CounterData } from '@/Data/CounterData';

interface WelcomeProps {
    image: string;
    title: string;
    subtitle: string;
    description: string;
}
export default function Welcome({image,title,subtitle,description}: WelcomeProps) {
    
  return (
    <>
    <section className="flex flex-col lg:flex-row gap-[214px] pb-16 pt-[123px] items-center justify-center px-10 mylg:px-40 3xl:px-63">
        <div>
            <Image
                src={image}
                alt="welcome"
                width={450}
                height={650}  
                className='w-[250px] md:w-[350px] lg:w-[450px] '  
            />
        </div>
        <div className="lg:flex-1 text-center lg:text-start">
            <h4 className="text-mygray text-base font-semibold uppercase text-opacity-60">{subtitle}</h4>
            <h2 className="text-2xl lg:text-32 text-mygray font-extrabold mt-1.5 mb-8">{title}</h2>
            <p className="text-mygray text-base lg:text-lg mb-8 leading-8">{description}</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[50px]">
                {CounterData.map((counter, index) => (
                    <Counter key={index} value={counter.value} label={counter.label} />
                ))}
            </div>
        </div>
    </section>
    </>
  )
}
