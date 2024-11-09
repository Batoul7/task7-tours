import AboutIcon1 from '@/assets/about icons/icon_map.png'
import AboutIcon2 from '@/assets/about icons/icon_guide.png'
import AboutIcon3 from '@/assets/about icons/icon_experience.png'
import AboutIcon4 from '@/assets/about icons/icon_best price.png'
import Image from 'next/image'

export default function AboutCard() {
    const data =[
        {
            icon:AboutIcon1.src,
            alt:"map",
            text:"Complete Packages For All Your Wishes"
        },
        {
            icon:AboutIcon3.src,
            alt:"guide",
            text:"Over 30 Years Of Experience"
        },
        {
            icon:AboutIcon2.src,
            alt:"experience",
            text:"Expert Guides For You"
        },
        {
            icon:AboutIcon4.src,
            alt:"best price",
            text:"Guaranteed fun at the best price!s"
        },
    ]
  return (
    <section className='bg-offers bg-cover bg-center px-10 mylg:px-40 3xl:px-63 py-[83px]
    flex justify-center flex-wrap gap-[83px] items-center lg:justify-between mt-[120px]'>
      {data.map((item,index) => {
        return(
            <div key={index} className='text-center p-7.5 rounded-3xl bg-bgbox justify-center w-[292.5px] h-[189px]'>
                <Image src={item.icon} alt={item.alt} width={60} height={60} className='mx-auto mb-[15px]'/>
                <p className='text-xl font-semibold'>{item.text}</p>
            </div>
        )
      })}
    </section>
  )
}
