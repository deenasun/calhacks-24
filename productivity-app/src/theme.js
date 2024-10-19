'use client';
import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';

const geistMono = localFont({
  src: "./app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const theme = createTheme({
  typography: {
    fontFamily: `${geistMono.style.fontFamily}, Arial, sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: '${geistMono.style.fontFamily}';
          font-style: normal;
          font-display: swap;
          font-weight: 100 900;
          src: url(${geistMono.src}) format('woff');
        }
      `,
    },
  },
});

export default theme;
