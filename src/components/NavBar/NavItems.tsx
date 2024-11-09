import Link from 'next/link';

interface NavItemsProps {
  items:{ path: string; name: string; }[];
  show?: (active: boolean) => void;
}

export default function NavItems({items,show} : NavItemsProps) {
  return (
    <>
       <ul className='flex flex-col text-center lg:flex-row lg:gap-10 '>
            {items?.map((item,index) => {
                return (
                    <li key={index} 
                    className='flex items-center capitalize lg:hover:border-b-2 hover:border-b-myprimary'
                    onClick={() => show && show(false)}>
                      <Link href={item.path} className='text-xl font-semibold pb-10 lg:p-0 w-full hover:text-myprimary'>{item.name}</Link>
                    </li>
                )
            })}
        </ul>   
    </>
  )
}
