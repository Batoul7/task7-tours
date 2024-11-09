import Link from 'next/link';
import React from 'react';
import MyButton from '../MyButton/MyButton';
import GoogleButton from '../GoogleButton/GoogleButton';

interface AuthFormProps {
  title: string;
  fields: { name: string; type: string; placeholder: string; label: string }[];
  buttonText: string;
  btnGoogleText:string;
  additionalContent?: {
    text: string;
    linkText?: string;
    onClick?: () => void;
  };
  isSignUp?: boolean; 
};

const AuthForm = ({  title, fields, buttonText, additionalContent, isSignUp,btnGoogleText }: AuthFormProps) => {

  return (
    <div className="min-w-[25.41%] mx-auto py-10 px-[59px] bg-white shadow-myshadow rounded-3xl">
      <div className='flex justify-between items-center  mb-5'>
        <h2 className="text-32 font-bold text-mygray text-opacity-60">{title}</h2>
        <button>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4" clipPath="url(#clip0_2_1685)">
            <path d="M12.9399 12.9199L17.7999 8.05991C17.9091 7.93238 17.9662 7.76833 17.9597 7.60054C17.9532 7.43276 17.8837 7.2736 17.7649 7.15487C17.6462 7.03614 17.4871 6.96659 17.3193 6.96011C17.1515 6.95362 16.9874 7.0107 16.8599 7.11991L11.9999 11.9799L7.1399 7.11325C7.01237 7.00403 6.84832 6.94696 6.68053 6.95344C6.51275 6.95992 6.35359 7.02947 6.23486 7.1482C6.11613 7.26693 6.04657 7.42609 6.04009 7.59388C6.03361 7.76166 6.09068 7.92571 6.1999 8.05325L11.0599 12.9199L6.19323 17.7799C6.12345 17.8397 6.06677 17.9132 6.02675 17.9959C5.98674 18.0786 5.96425 18.1687 5.9607 18.2605C5.95716 18.3524 5.97263 18.4439 6.00614 18.5295C6.03966 18.615 6.0905 18.6927 6.15547 18.7577C6.22044 18.8227 6.29814 18.8735 6.38369 18.907C6.46924 18.9405 6.56079 18.956 6.6526 18.9524C6.74442 18.9489 6.8345 18.9264 6.91721 18.8864C6.99992 18.8464 7.07347 18.7897 7.13323 18.7199L11.9999 13.8599L16.8599 18.7199C16.9874 18.8291 17.1515 18.8862 17.3193 18.8797C17.4871 18.8732 17.6462 18.8037 17.7649 18.685C17.8837 18.5662 17.9532 18.4071 17.9597 18.2393C17.9662 18.0715 17.9091 17.9074 17.7999 17.7799L12.9399 12.9199Z" fill="#333333"/>
            </g>
            <defs>
            <clipPath id="clip0_2_1685">
            <rect width="24" height="24" fill="white" transform="translate(0 0.919922)"/>
            </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
      {fields.map((field, index) => (
        <div key={index} className="mb-5">
          <label htmlFor={field.name} className="block text-mygray text-opacity-60 mb-3.5 text-18 font-semibold">
            {field.label}
          </label>
          <div className='relative'>
          <input
            id={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            className=" w-full text-16 px-6 py-4 border border-[#33333333] rounded-lg focus:outline-none focus:border-myprimary"
          />
          {field.type === 'password' &&
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
           className='absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer'>
            <g opacity="0.4">
            <path d="M11.9061 14.625C12.6023 14.625 13.27 14.3484 13.7623 13.8561C14.2546 13.3639 14.5311 12.6962 14.5311 12C14.5311 11.9231 14.5276 11.8469 14.5211 11.7717L11.6779 14.6149C11.7531 14.6215 11.829 14.625 11.9061 14.625ZM20.5949 3.88031L19.5936 2.87999C19.5585 2.84486 19.5108 2.82512 19.4611 2.82512C19.4114 2.82512 19.3637 2.84486 19.3286 2.87999L16.7664 5.44288C15.3529 4.72054 13.7641 4.35937 11.9999 4.35937C7.4952 4.35937 4.13427 6.70546 1.91708 11.3976C1.82796 11.5864 1.78174 11.7925 1.78174 12.0012C1.78174 12.2099 1.82796 12.416 1.91708 12.6047C2.80302 14.4708 3.86981 15.9665 5.11747 17.0918L2.63802 19.5703C2.60288 19.6055 2.58314 19.6531 2.58314 19.7028C2.58314 19.7526 2.60288 19.8002 2.63802 19.8354L3.63856 20.8359C3.67372 20.8711 3.7214 20.8908 3.7711 20.8908C3.82081 20.8908 3.86848 20.8711 3.90364 20.8359L20.5949 4.14562C20.6123 4.1282 20.6262 4.10753 20.6356 4.08476C20.645 4.062 20.6499 4.0376 20.6499 4.01296C20.6499 3.98832 20.645 3.96392 20.6356 3.94116C20.6262 3.9184 20.6123 3.89772 20.5949 3.88031ZM7.78114 12C7.78108 11.2875 7.96556 10.5872 8.31661 9.96715C8.66767 9.34716 9.17333 8.82866 9.78433 8.46217C10.3953 8.09568 11.0908 7.8937 11.8031 7.8759C12.5154 7.85811 13.2201 8.0251 13.8486 8.36062L12.7091 9.50015C12.2495 9.353 11.7583 9.33528 11.2894 9.44893C10.8204 9.56258 10.3918 9.80321 10.0506 10.1444C9.70936 10.4856 9.46873 10.9142 9.35508 11.3832C9.24142 11.8522 9.25915 12.3434 9.4063 12.803L8.26677 13.9425C7.94699 13.345 7.78014 12.6777 7.78114 12Z" fill="#333333"/>
            <path d="M22.0828 11.3953C21.2578 9.65782 20.2759 8.24102 19.1369 7.14493L15.7587 10.5234C16.0434 11.2679 16.1066 12.0788 15.9404 12.8583C15.7742 13.6378 15.3859 14.3525 14.8223 14.9161C14.2588 15.4797 13.544 15.868 12.7645 16.0342C11.985 16.2003 11.1741 16.1372 10.4297 15.8524L7.56421 18.7179C8.89358 19.3331 10.3722 19.6406 12 19.6406C16.5047 19.6406 19.8656 17.2945 22.0828 12.6024C22.1719 12.4136 22.2182 12.2075 22.2182 11.9988C22.2182 11.7901 22.1719 11.584 22.0828 11.3953Z" fill="#333333"/>
            </g>
            </svg>}
          </div>
        </div>
      ))}
        {isSignUp && (
          <div className="mb-5 flex items-center text-gray-600">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              I agree with the <span className="text-myprimary hover:underline">Terms and Privacy</span>
            </label>
          </div>
        )}
       {!isSignUp && (
          <div className="mb-5 text-right">
            <Link href="/forgot-password" className="text-[#33333399] hover:underline">
            Forgot your password?
            </Link>
          </div>
        )}
      <MyButton bg={true} name={buttonText} path='#' style='w-full'/>
      <div className="text-center my-1.5 text-mygray">or</div>
      <GoogleButton name={btnGoogleText}/>
      {additionalContent && (
        <div className="mt-6 text-center text-16 text-mygray">
          {additionalContent.text}{' '}
          {additionalContent.linkText && (
            <button onClick={additionalContent.onClick}
            className="text-myprimary hover:underline">
              {additionalContent.linkText}
            </button>
          )}
        </div>
      )}
    </form>
  </div>
  );
};

export default AuthForm;