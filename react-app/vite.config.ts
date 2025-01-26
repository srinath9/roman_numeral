// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// import { defineConfig } from 'vite';

// export default defineConfig({
//   plugins: [react()],
//     test: {
//       environment: 'jsdom', // Set the test environment to jsdom
//       setupFiles: './vitest.setup.ts', // Optional setup file for test utilities
//     },
//   });

  import { defineConfig } from 'vitest/config'
  import react from '@vitejs/plugin-react'
  
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom'
    }
  })