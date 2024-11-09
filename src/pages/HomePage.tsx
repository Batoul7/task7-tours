import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Welcome from "@/components/Welcome/Welcome";
import welcomeImg from '@/assets/imgs/welcome1.png'
import Offers from "@/components/Offers/Offers";
import Services from "@/components/Services/Services";
import Booking from "@/components/Booking/Booking";
import PopularPackages from "@/components/PopularPackages/PopularPackages";
import Testimonials from "@/components/Testimonials/Testimonials";


export default function HomePage() {
  
  return (
    <div  className="4xl:container mx-auto">
      <Hero page='home' title='Enjoy in the best way!' desc='Enjoy our services for your trip anytime' bghero='bg-herohome'/>
      <Slider/>
      <Welcome
          image={welcomeImg.src}
          subtitle="WELCOME TO OUR SITE!"
          title="We are the best company for your visit"
          description="After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"
      />
      <Offers/>
      <Services/>
      <Booking/>
      <PopularPackages/>
      <Testimonials/>
    </div>
  )
}
