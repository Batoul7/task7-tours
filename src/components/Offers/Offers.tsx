import Image from 'next/image'
import React from 'react'
import offersImg from '@/assets/imgs/offers.png'
import MyButton from '../MyButton/MyButton'

export default function Offers() {
  return (
    <section className=' relative bg-offers bg-cover bg-center h-[450px] mt-[100px] py-15 px-10 mylg:px-40 3xl:px-63 
                        flex items-center justify-center lg:justify-start'>
      <div className='w-[569px] p-7.5 bg-bgbox rounded-3xl text-center flex flex-col gap-8'>
        <h4 className='text-32 text-mygray font-extrabold leading-10'>Get Special Offers for Organizations</h4>
        <p className='text-lg leading-[26px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <MyButton bg={true} name='Contact Us' style='w-[212px] mx-auto'/>
      </div>
      <Image src={offersImg} alt='offers' width={427}  height={600}
      className='hidden lg:flex absolute bottom-0 right-10 mylg:right-40 3xl:right-63'/>
    </section>
  )
}
