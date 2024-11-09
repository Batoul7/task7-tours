import Image from 'next/image';
import React from 'react';

type Option = {
  label: string;
  value: string;
};

type InputSectionProps = {
  label: string;
  iconPath: string;
  type: 'select' | 'date' | 'time';
  options?: Option[];
};

const InputSection: React.FC<InputSectionProps> = ({
  label,
  iconPath,
  type,
  options = [],
}) => {
  return (
        <div className="flex items-start p-2 lg:p-4 gap-[7px] text-mygray">
            <Image src={iconPath} alt="" width={24} height={24}/>  
            <div className='flex flex-col items-start gap-1.5'>
                <h1 className='font-semibold text-mygray text-lg'>{label}</h1>
                {type === 'select' ? (
                    <select className=" text-lg font-normal text-mygray text-opacity-60" defaultValue="">
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                    </select>
                ) : (
                    <input
                    type={type}
                    className="text-sm w-full md:w-auto rounded-md p-2"
                    />
                )}
            </div>
        
        </div>
  );
};

export default InputSection;
