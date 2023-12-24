tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
          headerbg: '#282828',
          red: '#F40404',
          linear: 'rgba(0, 0, 0, 0.60)',
          button:'rgba(255, 255, 255, 0.50)'
        },
        maxWidth: {
          'container': '1144px',
        },
        fontFamily: {
          'poppins': "'Poppins', sans-serif",
        },
        backgroundImage: {
          'banner': "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) ,url('images/banner.jpg')",
        }
      }
    }
  }
