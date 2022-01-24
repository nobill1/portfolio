module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {        
        body: ["Nippo", "sans-serif"],
        sans: ['Teko', "sans-serif"]      
      },
      fontSize: {
        "hd1": ['4rem'],
        "hd2": ['2rem'],
        "hd3": ['1.4125rem'],
        "bod": ['1rem'],
        "fot": ['0.875rem'],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)"        
      },
      screens: {
        'm2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'mxl': {'max': '1440px'},
        // => @media (max-width: 1279px) { ... }
  
        'mlg': {'max': '1024px'},
        // => @media (max-width: 1023px) { ... }
  
        'mmd': {'max': '983px'},
        // => @media (max-width: 983px) { ... }

        'msm': {'max': '569px'},
        // => @media (max-width: 569px) { ... }
  
        'mxs': {'max': '425px'},
        // => @media (max-width: 425px) { ... }

        md: {'min': '983px'},
        // => @media (max-width: 983px) { ... }

        sm: {'min': '569px'},
        // => @media (min-width: 569px) { ... }  
        
        xs: {'min': '425px'},
        // => @media (min-width: 425px) { ... }
      },
      boxShadow: {
        small: '4px 4px 0px 0px rgba(113,196,189,1)',
        large: '8px 8px 0px 0px rgba(113,196,189,1)',   
        smallB: '4px 4px 0px 0px rgba(27,20,100,1);',
        largeB: '8px 8px 0px 0px rgba(27,20,100,1);'  
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
