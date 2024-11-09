import React from 'react'
import Counter from '../Counter/Counter';
import Image from 'next/image';

interface WelcomeProps {
    image: string;
    title: string;
    subtitle: string;
    description: string;
}
export default function Welcome({image,title,subtitle,description}: WelcomeProps) {
    const counters = [
        { value: 20, label: "Years Experience" },
        { value: 100, label: "Happy Customer" },
        { value: 15, label: "Choice of Services" },
        { value: 10, label: "Professional Guides" }
    ];
  return (
    <>
    <section className="flex flex-col lg:flex-row gap-[214px] pb-16 pt-[123px] items-center justify-center px-10 mylg:px-40 3xl:px-63">
        <div className="">
            <Image
                src={image}
                alt="welcome"
                width={450}
                height={650}    
            />
        </div>
        <div className="lg:flex-1 text-center lg:text-start">
            <h4 className="text-mygray text-base font-semibold uppercase text-opacity-60">{subtitle}</h4>
            <h2 className="text-32 text-mygray font-extrabold mt-1.5 mb-8">{title}</h2>
            <p className="text-mygray text-lg mb-8 leading-8">{description}</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[50px]">
                {counters.map((counter, index) => (
                    <Counter key={index} value={counter.value} label={counter.label} />
                ))}
            </div>
        </div>
    </section>
    </>
  )
}
