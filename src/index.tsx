import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import Routes from './Routes';
import axiosInstance from './helpers/axiosInstance';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { customTheme } from './config/theme';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (url: string) => axiosInstance(url).then((res) => res.data),
      }}
    >
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </SWRConfig>
  </BrowserRouter>,
  // </React.StrictMode>
  document.getElementById('root')
);
