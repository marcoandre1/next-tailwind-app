import React from 'react';
import PropTypes from 'prop-types';

import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.object,
};

export default MyApp;
