import React from 'react';
import './Header.css'
import Search from './Search';
// import Navbar from './Navbar';
import Head from './Head';

const Header = ({ cartItem }) => {
    return (
        <>
            <Head />
            <Search cartItem={cartItem} />
            {/* <Navbar />             */}
        </>
    );
};

export default Header;