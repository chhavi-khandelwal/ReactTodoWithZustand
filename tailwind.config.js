module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    screens: {
      md: '768px',
    },
    extend: {
      inset: {
        '-5': '-5px',
        '-15': '-15px',
        10: '10px',
      },
      height: {
        48: '48px',
        30: '30px',
        20: '20px',
      },
      padding: {
        5: '5px',
        10: '10px',
        20: '20px',
      },
      margin: {
        5: '5px',
        10: '10px',
        20: '20px',
        30: '30px',
      },
      fontSize: {
        10: '10px',
        18: '18px',
        14: '14px',
        16: '16px',
        24: '24px',
      },
      width: {
        300: '300px',
        500: '500px',
        30: '30px',
        20: '20px',
        280: '280px',
        250: '250px',
        440: '440px',
      },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};
