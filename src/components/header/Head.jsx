import React from 'react';

const Head = () => {
    return (
        <>
            <section className='head'>
                <div className='container d_flex'>
                    <div className='left row'>
                        <i className='fa fa-phone '></i>
                        <label htmlFor="">+254 710 811 238</label>
                        <i className='fa fa-envelope'></i>
                        <label htmlFor="">example@gmail.com</label>
                    </div>
                    <div className=' right row RText'>
                        <label htmlFor=""> Theme FAQ's</label>
                        <label htmlFor=""> Need Help?</label>
                        <span>🏳️‍⚧️</span>
                        <label htmlFor="">EN</label>
                        <span>🏳️‍⚧️</span>
                        <label htmlFor="">KEN</label>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default Head;