/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      sevillana: ["Sevillana"],
      anton: ["Anton SC"],
    },
    screens: {
      sm: '550px',
      md: '800px', 
      lg: '1200px',
      xl: '1440px',
    },
    extend: {
      transitionDuration: {
        2000: '2000ms'
      },
      colors: {
        primary: '#ff5733',
        secondary: '#fffc33',  
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
