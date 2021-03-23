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
    margin: ['responsive', 'first'],
    fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'dark', 'hover', 'focus'],
    backgroundColor: ['responsive', 'dark', 'hover', 'focus'],
    typography: ['responsive', 'dark'],
    textDecoration: ['responsive', 'hover', 'focus', 'active'],
    opacity: ['hover', 'focus'],
  },
  plugins: [],
}
