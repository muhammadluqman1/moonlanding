const defaultConfig = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './src/**/*.tsx', './lib/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: [...defaultConfig.fontFamily.sans],
      display: [...defaultConfig.fontFamily.serif]
    },
    extend: {
      spacing: {
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem'
      },
      colors: {
        'accent-1': '#FBBA04',
        skeptic: {
          50: '#fdfefd',
          100: '#fbfdfc',
          200: '#f4fbf7',
          300: '#eef8f3',
          400: '#e1f2e9',
          500: '#D4EDE0',
          600: '#bfd5ca',
          700: '#9fb2a8',
          800: '#7f8e86',
          900: '#68746e'
        },
        'primary-1': {
          DEFAULT: '#000000',
          50: '#A6FFFF',
          100: '#8DFEFE',
          200: '#5AFEFE',
          300: '#27FEFE',
          400: '#01F1F1',
          500: '#01BEBE',
          600: '#018B8B',
          700: '#005959',
          800: '#002626',
          900: '#000000'
        },
        'primary-2': {
          DEFAULT: '#000000'
        },
        'primary-3': {
          DEFAULT: '#7F7F7F',
          50: '#F2F2F2',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#B2B2B2',
          400: '#999999',
          500: '#7F7F7F',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919'
        },
        'primary-4': {
          DEFAULT: '#2E2E2E',
          50: '#A1A1A1',
          100: '#949494',
          200: '#7B7B7B',
          300: '#616161',
          400: '#484848',
          500: '#2E2E2E',
          600: '#141414',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
        'bg-gray': '#FAFBFB',
        'bg-light-blue': '#D8E2E4'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')]
};
