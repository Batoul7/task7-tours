import React from 'react';
import GoogleImg from '/public/assets/imgs/grommet-icons_google.png'
import Image from 'next/image';

interface BtnName {
  name:string
}
const GoogleButton = ({name}:BtnName) => {
  return (
    <button className="w-full flex items-center justify-between gap-3.5 py-3.5 px-6 border border-myborder rounded-full text-mygray">
      <Image src={GoogleImg} alt="Google icon" width={24} height={24}  />
     <span className='flex-1'>{name}</span>
    </button>
  );
};

export default GoogleButton;
