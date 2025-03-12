module.exports = {
    content: ['index.html'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: 'oklch(0.627 0.265 303.9)',
          secondary: '#64748b',
          dark: '#0f172a',
        },
        container: {
          center: true,
          padding: '16px',
        },
        mode: "jit",
        screens: {
          '2xl': '1320px',
        },
      },
    },
    plugins: [],
  };