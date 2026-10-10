export default {
  content: ['./index.html', './*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ember: '#C85A32', char: '#20201E', cream: '#F7F1E7', sand: '#E5D5BF', ash: '#77736D' },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        hand: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
