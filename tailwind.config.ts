import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'secondarybg':'#131311',
        'primarybg':'#0E0E0E',
        'mainColor':'#2ADA9A',
      },
      textColor:{
        'textColor':'#F8F8F8',
        'mainColor':'#2ADA9A',
      },
      borderColor:{
        'mainBorder':'#2ADA9A'
      }

    },
  },
  plugins: [],
}
export default config
