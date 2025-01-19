import React from 'react';
import PackageCard from './PackageCard';
import { packagesData } from '@/Data/PopularPackagesData';

const PopularPackages = () => {

  return (
    <section id='packages' className="pt-[120px] px-10 mylg:px-40 3xl:px-63" >
      <h2 className="text-2xl lg:text-32 font-extrabold mb-15 text-mygray">The Most Popular Packages</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-5">
        {packagesData.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
};

export default PopularPackages;
