/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': { /** sm (640px) */
            maxWidth: '640px',
          },
          '@screen md': { /** md (768px) */
            maxWidth: '640px',
          },
          '@screen lg': { /** lg (1024px) */
            maxWidth: '768px',
          },
          '@screen xl': { /** xl (1280px) */
            maxWidth: '1024px',
          },
          '@screen 2xl': { /** 2xl (1536px) */
            maxWidth: '1024px',
          },
        }
      })
    }
  ],
}
