'use client';
import { useState } from 'react'
import numberPeople from '@/assets/svg/icon_private.svg'
import calendar from '@/assets/svg/system-uicons_calendar-month.svg'
import time from '@/assets/svg/system-uicons_clock.svg'
import tour from '@/assets/svg/icon_tour.svg'
import car from '@/assets/svg/icon_car.svg'
import Image from 'next/image';
import search from '@/assets/svg/akar-icons_search.svg'
import InputSection from './InputSection';

interface HeroProps {
    page:string;
    title: string;
    desc: string;
    bghero:string
}

export default function Hero({page, title, desc, bghero}: HeroProps) {
    const [tourType, setTourType] = useState('public');
    const sectionsData = [
            {
            iconPath:numberPeople,
            label: "Number of people",
            type: "select",
            options: [
                { value: "", label: "Choose number" },
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
            ],
            },
            {
            iconPath:calendar,
            label: "Date",
            type: "date",
            },
            {
            iconPath: time,
            label: "Time",
            type: "time",
            },
            {
            iconPath:tour,
            label: "Tour",
            type: "select",
            options: [
                { value: "", label: "Select Tour" },
                { value: "tour1", label: "Tour 1" },
                { value: "tour2", label: "Tour 2" },
            ],
            },
            {
            iconPath: car,
            label: "Transportation",
            type: "select",
            options: [
                { value: "", label: "Select Transportation" },
                { value: "bus", label: "Bus" },
                { value: "car", label: "Car" },
                { value: "bike", label: "Bike" },
            ],
            },
        ];
      
  return (
    <>
    {(page === 'home') ? (
        <div className={`relative  h-auto md:h-screen ${bghero} bg-cover bg-center pt-[160px] md:pt-[293px] text-white px-10 mylg:px-40 3xl:px-63`}>
           <div className='max-w-[1383px] mx-auto text-center'>
                <h1 className='text-5xl lg:text-7xl mb-4 font-podcast'>{title}</h1>
                <p className='text-2xl font-bold mb-4 lg:mb-16'>{desc}</p>
                <div className="bg-mywhite flex flex-col items-start p-2 lg:p-5  rounded-xl">
                    {/* Tour Type Selection */}
                    <div className="flex items-center rounded-t-xl">
                        <button 
                        onClick={() => setTourType('public')}
                        className={`flex items-center gap-2 lg:gap-3.5 p-2 md:p-4 rounded-tl-xl cursor-pointer  text-16  md:text-lg font-semibold 
                            ${tourType === 'public' ? 'text-myprimary bg-white' : 'bg-[#FFFFFF66] text-white'}`}
                        >
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className={`${tourType === 'public' ? 'fill-myprimary stroke-myprimary' : 'fill-white stroke-white'}`}>
                            <path d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM11.5 19.93C7.55 19.44 4.5 16.08 4.5 12C4.5 11.38 4.58 10.79 4.71 10.21L9.5 15V16C9.5 17.1 10.4 18 11.5 18V19.93ZM18.4 17.39C18.14 16.58 17.4 16 16.5 16H15.5V13C15.5 12.45 15.05 12 14.5 12H8.5V10H10.5C11.05 10 11.5 9.55 11.5 9V7H13.5C14.6 7 15.5 6.1 15.5 5V4.59C18.43 5.78 20.5 8.65 20.5 12C20.5 14.08 19.7 15.97 18.4 17.39Z" />
                        </svg>
                        Public Tours
                        </button>
                        <button 
                        onClick={() => setTourType('private')}
                        className={`flex items-center gap-3.5 p-2 md:p-4 rounded-tr-xl cursor-pointer text-16 md:text-lg font-semibold 
                            ${tourType === 'private' ? 'text-myprimary bg-white' : 'bg-[#FFFFFF66] text-white'}`}
                        >
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className={`${tourType === 'private' ? 'fill-myprimary stroke-myprimary' : 'fill-white stroke-white'}`}>
                            <g clipPath="url(#clip0_1_1423)">
                            <path d="M8.42817 7.73352C9.12437 5.29283 10.5301 4.07248 12.56 4.09248C14.5246 4.11249 15.9277 5.36351 16.5705 7.73886C16.6559 7.49479 16.7119 7.32541 16.7732 7.15736C17.252 5.86632 18.179 5.09677 19.542 4.98474C20.7957 4.88337 21.8093 5.4342 22.4415 6.52251C23.1257 7.69351 23.0484 8.87518 22.2401 9.96083C21.96 10.3356 21.9827 10.437 22.3988 10.6477C23.7966 11.3519 24.4821 12.5269 24.4968 14.0887C24.5154 16.0039 24.5141 16.0052 22.6656 16.6134C22.1827 16.7845 21.6821 16.9004 21.1732 16.9588C20.8677 16.9868 20.625 16.8868 20.577 16.5681C20.529 16.2493 20.7317 16.0679 21.0304 16.0186C21.7556 15.91 22.4627 15.7036 23.1324 15.4051C23.3098 15.3237 23.5325 15.2717 23.5325 15.0116C23.5325 14.2807 23.6259 13.5365 23.2924 12.847C22.8803 11.9947 22.2321 11.4079 21.2705 11.2932C20.2753 11.1885 19.2721 11.1858 18.2763 11.2852C18.0118 11.3169 17.7544 11.3927 17.5148 11.5093C16.7346 11.8627 16.7252 11.9814 17.3134 12.6003C18.1173 13.417 18.5896 14.5029 18.6391 15.6478C18.6631 16.1813 18.5831 16.7228 18.6604 17.2482C18.7938 18.1192 18.3804 18.5019 17.6255 18.8194C14.0138 20.3371 10.4581 20.2718 6.91841 18.5966C6.49562 18.3966 6.31423 18.1445 6.34758 17.6737C6.38492 17.1402 6.36225 16.6067 6.34758 16.0732C6.32357 14.6062 6.82638 13.3685 7.91603 12.3989C8.2788 12.0761 8.16143 11.9321 7.85468 11.716C6.84505 11.0038 3.58679 11.0198 2.58917 11.752C1.68891 12.4175 1.16743 13.9833 1.47151 15.0556C1.54087 15.2957 1.73826 15.3437 1.90764 15.4211C2.5365 15.7034 3.2011 15.8981 3.88287 15.9999C4.19763 16.0466 4.46704 16.1826 4.42303 16.5454C4.37368 16.9455 4.06026 16.9962 3.71749 16.9455C2.69586 16.7948 1.74493 16.4307 0.821995 15.9826C0.737409 15.9512 0.663762 15.8959 0.610012 15.8235C0.556263 15.751 0.524727 15.6645 0.519241 15.5744C0.531245 14.5368 0.367198 13.4858 0.821995 12.4869C1.19136 11.6432 1.86045 10.9665 2.69987 10.5877C2.96661 10.4636 3.09998 10.397 2.85724 10.0835C1.96365 8.95521 1.84629 7.72419 2.5905 6.4825C3.23602 5.40619 4.25364 4.86337 5.50734 4.99141C6.98909 5.14212 7.91869 6.02103 8.31881 7.45478C8.33615 7.51746 8.36949 7.57615 8.42817 7.73352ZM12.504 12.1281C11.9705 12.1281 11.437 12.1094 10.9035 12.1281C9.96236 12.1733 9.07244 12.5702 8.41 13.2403C7.74755 13.9104 7.36087 14.8048 7.32652 15.7465C7.31185 16.1906 7.35587 16.6387 7.30785 17.0802C7.25184 17.5937 7.48124 17.8284 7.9307 18.0138C10.8155 19.1901 13.715 19.2542 16.6385 18.1819C17.6935 17.7937 17.6895 17.7817 17.6882 16.6868C17.6882 16.376 17.6882 16.0652 17.6802 15.7532C17.6465 14.8111 17.2604 13.9161 16.5981 13.2452C15.9359 12.5744 15.046 12.1766 14.1045 12.1308C13.571 12.1081 13.0375 12.1281 12.504 12.1281ZM15.5542 8.08029C15.5494 7.27097 15.2234 6.4967 14.6477 5.9278C14.0721 5.3589 13.294 5.04198 12.4847 5.04675C11.6753 5.05153 10.9011 5.37761 10.3322 5.95326C9.76328 6.52891 9.44636 7.30698 9.45113 8.1163C9.4618 9.76077 10.8862 11.1745 12.5213 11.1612C14.1565 11.1478 15.5716 9.72476 15.5542 8.08029ZM5.2766 10.2516C5.84942 10.2438 6.39579 10.0092 6.79584 9.59916C7.19589 9.18911 7.41696 8.63712 7.41055 8.06429C7.39054 6.89328 6.37692 5.89833 5.21659 5.91967C4.05625 5.94101 3.0493 6.97464 3.0693 8.1243C3.0867 8.69686 3.32734 9.2399 3.73979 9.6374C4.15224 10.0349 4.7038 10.2553 5.2766 10.2516ZM19.7541 10.2516C20.3266 10.2479 20.875 10.0208 21.2826 9.61873C21.6901 9.21665 21.9246 8.67135 21.936 8.09896C21.9216 7.52664 21.6886 6.98157 21.2847 6.57576C20.8809 6.16994 20.337 5.93421 19.7648 5.917C19.1913 5.92765 18.6444 6.16055 18.2393 6.56661C17.8343 6.97267 17.6027 7.52015 17.5935 8.09363C17.5949 8.6661 17.823 9.21471 18.2279 9.61939C18.6329 10.0241 19.1816 10.2519 19.7541 10.2529V10.2516ZM9.96995 11.2039C9.12479 10.4679 8.58493 9.44292 8.45618 8.32969C8.30947 8.76849 8.25346 9.0339 8.13609 9.2633C7.9427 9.64874 7.46923 10.0902 7.55726 10.3703C7.65462 10.6877 8.30014 10.7957 8.60022 11.0998C9.01901 11.5279 9.40312 11.5893 9.96995 11.2039ZM14.974 11.2772C15.4529 11.3372 15.7423 11.712 16.101 11.3519C16.4425 11.0025 16.8507 10.7254 17.3014 10.537C17.5001 10.4556 17.6201 10.3609 17.4227 10.1596C16.968 9.69675 16.7852 9.09258 16.5345 8.33103C16.3878 9.58339 15.8476 10.4556 14.9727 11.2772H14.974Z"  strokeWidth="0.3"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_1423">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        Private Tours
                        </button>
                    </div>
                    <div className="flex flex-row justify-between gap-3 bg-white p-2 lg:p-3 w-full rounded-b-xl rounded-tr-xl flex-wrap items-center">
                        {sectionsData.map((section, index) => (
                            <InputSection
                            key={index}
                            label={section.label}
                            iconPath={section.iconPath}
                            type={section.type as 'select' | 'date' | 'time'}
                            options={section.options}
                            />
                        ))}
                        <button className="bg-myprimary text-white rounded-xl p-3 lg:p-6">
                            <Image src={search} alt='' />
                        </button>
                        </div>
                </div>
            </div>
        </div>
    ) : (
    (page === 'about') && 
        <div className={`h-auto lg:h-screen ${bghero} bg-cover bg-center 
        pt-[180px] pb-5 lg:pt-[390px] text-white px-10 mylg:px-40 3xl:px-63`}>
        <div className='w-[66.40%] max-w-[1383px] mx-auto text-center flex flex-col gap-3 lg:gap-6 '>
                <h1 className='text-4xl lg:text-7xl font-podcast'>{title}</h1>
                <p className='w-[89.89%] text-lg lg:text-2xl font-bold mx-auto'>{desc}</p>
                <button className=' block  mx-auto text-center bg-none text-white text-xl font-semibold
                border border-white py-3 px-6 rounded-full hover:bg-myprimary'>
                View our Tour Packages
                </button>
            </div>
        </div>
    )
    }
    </>
  )
}
