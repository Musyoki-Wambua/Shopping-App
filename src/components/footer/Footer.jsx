import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>Musyoki</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i className="fab fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fab fa-app-store"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>
          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Centre</li>
              <li>How To Buy</li>
              <li>Track Your Orders</li>
              <li>Corporate & Blk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Imaara Mall, Nairobi, Kenya</li>
              <li>Email: shop.onlinestore@gmail.com</li>
              <li>Phone: +254 721000000</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
