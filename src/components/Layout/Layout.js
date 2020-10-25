import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div className="mx-4 my-3">
    <Header />
    <Menu />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
