import React from 'react'
import servImg1 from '@/assets/imgs/serv1.png'
import servImg2 from '@/assets/imgs/serv2.png'
import servImg3 from '@/assets/imgs/serv3.png'
import servImg4 from '@/assets/imgs/serv4.png'
import ServCard from './ServCard'

export default function Services() {
    const CardInfo = [
        {
            image:servImg1.src,
            title:"Bike and rickshaw rental",
            desc:"Book your quality vehicle quickly for an hour or all day!"
        },
        {
            image:servImg2.src,
            title:"Guided tour of the countryside",
            desc:"Live the real Lucchese experience by visiting the suburbs by bike!"
        },  
        {
            image:servImg3.src,
            title:"Taxi and NCC service",
            desc:"Do you need not only a bike but also a driver? Then you have found the right place!"
        },
        {
            image:servImg4.src,
            title:"Bus Package",
            desc:"Do you need not only a bike but also a driver? Then you have found the right place!"
        },
    ]
  return (
    <section className='px-10 mylg:px-40 3xl:px-63 flex flex-wrap justify-center lg:justify-start gap-8 pt-[120px] pb-[63px]'>
      {CardInfo.map((card,index) => {
        return (
            <ServCard key={index} image={card.image} title={card.title} desc={card.desc}/>
        )
      })}
    </section>
  )
}
