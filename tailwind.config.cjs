/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                'open-sans': ['Open Sans', 'sans'],
              },
              keyframes: {
                fadeIn: {
                  from: {
                    opacity: '0',
                  },
                  to: {
                    opacity: '1',
                  },
                },
              },
              animation: {
                fadeIn: 'fadeIn 800ms ease-out forwards',
              
            },
        
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
};

module.exports = config;
