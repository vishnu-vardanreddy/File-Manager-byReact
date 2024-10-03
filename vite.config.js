// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     sourcemap: false, // Disable source maps for production build
//   },
//   server: {
//     sourcemap: false, // Disable source maps for development server
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Change to this if you installed it

export default defineConfig({
  plugins: [react()],
});
