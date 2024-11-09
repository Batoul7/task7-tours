import Link from 'next/link';

interface MyButtonProps {
    bg: boolean;
    name: string;
    path?:string;
    style?: string;
}
export default function MyButton({bg,name,path, style }: MyButtonProps) {
  return (
    <>
    {bg ? (
        <Link href={`${path}`} 
        className={`${style} flex items-center justify-center bg-myprimary text-white py-3.5 px-6 rounded-full `}>
            {name} 
        </Link>
    ):(
        <Link href={`${path}`} className={`${style} block text-center bg-white text-myprimary border border-myprimary py-3 px-6 rounded-full `}>
            {name}
        </Link>
    ) }
  </>
  )
}
