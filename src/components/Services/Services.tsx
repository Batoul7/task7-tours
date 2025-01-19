import React from 'react'
import ServCard from './ServCard'
import { CardInfo } from '@/Data/Services'

export default function Services() {
   
  return (
    <section className='px-10 mylg:px-40 3xl:px-63 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8 pt-[120px] pb-[63px]'>
      {CardInfo.map((card,index) => {
        return (
            <ServCard key={index} image={card.image} title={card.title} desc={card.desc}/>
        )
      })}
    </section>
  )
}
