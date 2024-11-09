import React from 'react'
import Image from 'next/image'

interface ServCardProps {
    image: string;
    title: string;
    desc: string;
}

export default function ServCard({image, title, desc}: ServCardProps) {
   
  return (
    <div className='flex flex-col gap-5 w-full md:w-3/4 lg:w-[330px]'>
      <Image src={image} alt='service' width={330} height={302} className='w-full rounded-3xl'/>
      <div className='text-mygray'>
      <h4 className='text-2xl font-bold mb-3'>{title}</h4>
      <p className='text-lg'>{desc}</p>
      </div>
      
    </div>
  )
}
