import Image from 'next/image'
import React from 'react'
import bikeImg from '/public/assets/imgs/bike picture.png'
import MyButton from '../MyButton/MyButton'

export default function Booking() {
  return (
    <section id='contact' className='relative bg-booking bg-cover 
    bg-center h-auto xl:h-[648px] py-8 xl:py-15 mb-10 px-10 mylg:px-40 3xl:px-63'>
            <h2 className="text-2xl lg:text-32 font-extrabold mb-9 text-center 3xl:text-start">Book Now Bike</h2>
            <div className="w-full 3xl:w-[734px] py-4 lg:py-7.5 px-4 lg:px-[34px] bg-bgbox rounded-3xl mx-auto 3xl:mx-0">
                <form className=" flex flex-wrap gap-3 lg:gap-7.5 justify-center">
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-7.5">
                        <div className="flex flex-col">
                            <label className="font-semibold text-lg mb-2 text-mygray">Name and Surname</label>
                            <input 
                            type="text" 
                            placeholder="Enter your name and surname" 
                            className="sm:w-[318px] py-2 md:py-14 px-1 sm:px-6 bg-white rounded-lg text-mygray text-opacity-50"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-lg mb-2 text-mygray">Email Address</label>
                            <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="sm:w-[318px] py-2 md:py-14 px-1 sm:px-6 bg-white rounded-lg text-mygray text-opacity-50"
                            />
                        </div>
                    </div>
                
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-7.5">
                        <div className="flex flex-col">
                            <label className="font-semibold text-lg mb-2 text-mygray">Telephone Number</label>
                            <input 
                            type="tel" 
                            placeholder="Enter your telephone number" 
                            className="sm:w-[318px] py-2 md:py-14 px-1 sm:px-6 bg-white rounded-lg text-mygray text-opacity-50"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-lg mb-2 text-mygray">Service Type</label>
                            <select 
                            className="sm:w-[318px] py-2 md:py-14 px-1 sm:px-6 bg-white rounded-lg text-mygray text-opacity-50" 
                            defaultValue=""
                            >
                            <option value="" disabled>Select the service types</option>
                            <option value="1">Type 1</option>
                            <option value="2">Type 2</option>
                            <option value="3">Type 3</option>
                            </select>
                        </div>
                    </div>
                
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-7.5 ">
                        <div className="flex flex-col">
                            <label className="font-semibold text-lg mb-2 text-mygray">Date</label>
                            <input 
                            type="date" 
                            className="sm:w-[318px] py-2 md:py-14 px-6 bg-white rounded-lg text-mygray text-opacity-50"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-lg mb-2 text-mygray">Time</label>
                            <input 
                            type="time" 
                            className="sm:w-[318px] py-2 md:py-14 px-6 bg-white rounded-lg text-mygray text-opacity-50"
                            />
                        </div>
                    </div>
                    
                </form>
                <MyButton bg={true} name='Book Now' style='mt-7.5 sm:w-[212px] mx-auto'/>
            </div>
      <Image src={bikeImg.src} alt='bike' width={724} height={542}
      className='hidden 3xl:flex absolute bottom-[-34px] right-10 mylg:right-40 3xl:right-63'/>
    </section>
  )
}
