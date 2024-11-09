import { useState } from 'react';

interface DropdownProps {
  title: string;
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between text-left "
      >
        {title}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
        <path d="M15.4166 7.29169L9.99998 12.7084L4.58331 7.29169" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute bg-white text-mygray w-full text-xs">
          {items.map((item, index) => (
            <li key={index} className="p-1 hover:bg-myprimary hover:text-white cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
