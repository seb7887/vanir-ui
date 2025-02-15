module.exports = {
  purge: [
    './src/components/**/*.tsx',
    './src/components/**/*.styled.ts',
    './src/components/**/*.styled.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      fontWeight: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
