import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "myprimary": "#FA8B02",
        "mywhite" : "#FFFFFF33",
        "mygray" :"#333333",
        "myborder" : "#33333333",
        "bgbox" : "#FFFFFF4D"
      },
      spacing :{
        "3.5" : "10px",
        "7.5":"30px",
        "63" : "250px",
        "14":"14px",
        "15" : "60px",
        "1.5" :"6px"
      },
      screens:{
        'mymd': '960px',
        'mylg': '1440px',
        "3xl": "1920px",
        "4xl":"2000px",  
      },
      backgroundImage: {
        'herohome': "url('/images/bgHeroHome.png')",
        "offers" : "url('/images/bgOffers.png')",
        "booking" : "url('/images/bgBike.png')",
        "heroabout": "url('/images/bgHeroAbout.png')"
      },
      fontFamily: {
        "podcast":"var(--font-podcast)"
      },
      boxShadow: {
         "myshadow" : "0px 4px 20px 0px #FFFFFF40",
         'packageshadow': '0px 0px 20px 0px #0000001A'
      },
      fontSize:{
        "16":"16px",
        "18":"18px",
        "32" : "32px"
      }
    },
  },
  plugins: [],
};
export default config;
