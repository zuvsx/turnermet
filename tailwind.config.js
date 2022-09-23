const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{md,njk,vue}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
	  fontSize: {
	  },
      letterSpacing: {
        normal:'0.145em',
      },
      borderRadius: {
        '1.5xl' : '10px',
        '4xl' : '32px',
      },
      backgroundSize: {
        '1/2': '50%',
      },
      maxWidth: {
        '1/2': '50%',
      },
      colors: {
        inherit: 'inherit',
        'alto': '#CFCFCF',
        'mercury': '#E8E8E8',
        'silver': '#bbbbbb',
        'blue-1': '#0500e5',
        'blue-2': '#005A9B'
      },
      gridTemplateAreas: {
      },
      gridTemplateRows: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1a1': '1fr auto 1fr',
        'a1a': 'auto 1fr auto',
        '1aa': '1fr repeat(2, auto)',
        'full': '100%',
      },
      gridTemplateColumns: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1a1': '1fr auto 1fr',
        'a1a': 'auto 1fr auto',
        '1aa': '1fr repeat(2, auto)',
        'full': '100%',
        // 'footer': '200px minmax(900px, 1fr) 100px',
      },
      textShadow: {
        'base' : '0px 0px 4px rgba(255, 255, 255, 0.25)'
      },
      boxShadow: {
        'purp': '0px 0px 3px rgb(120, 20, 147)',
        'fiol': '0px 0px 6px rgb(107, 104, 224)',
        'black': '0px 0px 13px rgb(0, 0, 0)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
