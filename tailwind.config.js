module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url('/src/assets/background.jpg')"
      },
      colors: {
        'primary': '#5E548E', // Example: Adjust to your actual color
        'secondary': '#90be6d', // Example: Adjust to your actual color
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

