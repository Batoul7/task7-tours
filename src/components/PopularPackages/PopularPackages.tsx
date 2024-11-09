import React from 'react';
import PackageCard from './PackageCard';

import package1 from '@/assets/imgs/package1.png'
import package2 from '@/assets/imgs/package2.png'
import package3 from '@/assets/imgs/package3.png'
import package4 from '@/assets/imgs/package4.png'

import icon1 from '@/assets/package icons/icon_one day.png'
import icon2 from '@/assets/package icons/icon_map.png'
import icon3 from '@/assets/package icons/icon_city map.png'
import icon4 from '@/assets/package icons/icon_support.png'
import icon5 from '@/assets/package icons/icon_mountain bike.png'
import icon6 from '@/assets/package icons/icon_guide.png'
import icon7 from '@/assets/package icons/icon_water.png'
import icon8 from '@/assets/package icons/icon_ticket.png'
import icon9 from '@/assets/package icons/icon_bus.png'
import icon10 from '@/assets/package icons/icon_companion.png'
import icon11 from '@/assets/package icons/icon_driver.png'
import icon12 from '@/assets/package icons/icon_location.png'
import icon13 from '@/assets/package icons/icon_best price.png'



const PopularPackages = () => {
  const packages = [
    {
      image: package1.src,
      title: 'BIKE / RICKSHAW',
      price: 10,
      period: 'day',
      packIcon:[icon1.src, icon2.src, icon3.src, icon4.src],
      details: [
        'Your bike for a day',
        'City App',
        'Discount on Rickshaw',
        'Guaranteed Support',
      ],
    },
    {
      image: package2.src,
      title: 'BIKE TOURS',
      price: 30,
      period: 'day',
      packIcon:[icon5.src, icon6.src, icon7.src, icon4.src],
      details: [
        'A Mountain Bike Included',
        'A Guide For You',
        'Bottle of water',
        'Guaranteed Support',
      ],
    },
    {
      image: package3.src,
      title: 'BUS TRIPS',
      price: 45,
      period: 'day',
      packIcon:[icon8.src, icon9.src, icon10.src, icon4.src],
      details: [
        'Park ticket',
        'Return bus',
        'Companion',
        'Guaranteed Support',
      ],
    },
    {
      image: package4.src,
      title: 'TRANSFER',
      price: 10,
      period: 'day',
      packIcon:[icon11.src, icon12.src, icon13.src, icon4.src],
      details: [
        'Personal Driver',
        'Wherever You Want',
        'At the best price',
        'Guaranteed Support',
      ],
    },
  ];

  return (
    <section id='packages' className="pt-[120px] px-10 mylg:px-40 3xl:px-63" >
      <h2 className="text-32 font-extrabold mb-15 text-mygray">The Most Popular Packages</h2>
      <div className="flex justify-center lg:justify-between flex-wrap gap-5">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
};

export default PopularPackages;
