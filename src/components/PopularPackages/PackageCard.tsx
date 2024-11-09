import Image from 'next/image';
import MyButton from '../MyButton/MyButton';

interface PackageCardProps {
  image: string;
  title: string;
  price: number;
  period: string;
  packIcon:string[];
  details: string[];
};

const PackageCard = ({ image, title, price, period, packIcon, details }: PackageCardProps) => {
  return (
    <div className="w-[340px] border border-[#EFEFEF] rounded-3xl hover:shadow-packageshadow">
      <Image src={image} alt={title} width={340} height={340} />
      <div className='p-[25px]'>
        <h3 className="text-xl font-extrabold text-mygray mb-4">{title}</h3>
        <div className="relative flex gap-[6.72px] mb-4 items-baseline ps-[18.72px]">
          <span className='text-xl text-mygray text-opacity-50 absolute top-0 left-0'>€</span> 
          <span className='text-myprimary text-5xl font-bold'>{price}</span>
          <span className="text-lg text-mygray text-opacity-60">/{period}</span>
        </div>
        <ul className="text-mygray mb-4">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center gap-4 py-4">
              <Image src={packIcon[index]} alt='package icon' width={24} height={24}/>
              <span className='text-lg '>{detail}</span>
            </li> 
          ))}
        </ul>
        <MyButton bg={false} name='Book Now' style='w-full text-xl font-semibold hover:bg-myprimary hover:text-white'/>
      </div>
    </div>
  );
};

export default PackageCard;
