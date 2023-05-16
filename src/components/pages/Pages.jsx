import React from 'react';
import Home from '../mainpage/Home';
import FlashDeals from '../flashDeals/FlashDeals';
import TopCate from '../top/TopCate';
import NewArrivals from '../newarraivals/NewArrivals';
import Discount from '../discount/Discount';
import Shop from '../shop/Shop';
import Announcements from '../announcements/Announcements';
import Wrapper from '../wrapper/Wrapper';

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
    return (
        <>
        <Home cartItem={cartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate />
        <NewArrivals />
        <Discount />
        <Shop shopItems={shopItems} addToCart={addToCart} />
        <Announcements />
        <Wrapper />
        
        </>
    );
};

export default Pages;