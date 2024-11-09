import Hero from '@/components/Hero/Hero';
import Welcome from '@/components/Welcome/Welcome';
import welcomeImg2 from '@/assets/imgs/welcome2.png'
import AboutCard from '@/components/AboutCard/AboutCard';
import Testimonials from '@/components/Testimonials/Testimonials';


export default function AboutPage() {
  return (
    <div>
     <Hero page='about' title='Our team cares about your full relax' desc='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.' bghero='bg-heroabout'/>
     <Welcome
          image={welcomeImg2.src}
          subtitle="WELCOME TO OUR SITE!"
          title="We Are The Center Of Lucca To Offer You The Best"
          description="We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"
      />
      <AboutCard/>
      <Testimonials/>
    </div>
  )
}
