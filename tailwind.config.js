module.exports = {
    purge: {
      content: ['./public/*.html']
    },
    theme: {
      extend: {
        textColor: {
          'client-primary': 'var(--client-primary)',
          'client-secondary': 'var(--client-secondary)'
        }
      }
    },
    variants: {},
    plugins: [],
  }
  