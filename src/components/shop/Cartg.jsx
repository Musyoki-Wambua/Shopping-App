import React from 'react';

const Cartg = () => {
    const data = [
        {
          cateImg: "https://t3.ftcdn.net/jpg/02/89/28/70/220_F_289287061_suqLz0YKj1u7dZGvpl9EhGX2qD6bgU8P.jpg",
          cateName: "Apple",
        },
        {
          cateImg: "https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2-500x281.png",
          cateName: "Samsung",
        },
        {
          cateImg: "https://1000logos.net/wp-content/uploads/2018/10/Oppo-logo-500x240.png",
          cateName: "Oppo",
        },
        {
          cateImg: "https://1000logos.net/wp-content/uploads/2022/02/Vivo-Logo-500x281.png",
          cateName: "Vivo",
        },
        {
          cateImg: "https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo-500x281.png",
          cateName: "Redimi",
        },
        {
          cateImg: "https://1000logos.net/wp-content/uploads/2021/05/Sony-logo-500x281.png",
          cateName: "Sony",
        },
      ]

    return (
        <>
        <div className="category">
            <div className='chead d_flex'>
                <h1>Brands</h1>
                <h1>Shops</h1>
            </div>
            {
                data.map((value, index) => {
                    return(
                        <div className='box f_flex' key={index}>
                            <img src={value.cateImg} alt="" />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
            <div className="box box2">
                <button>View All Brands</button>
            </div>
        </div>
                    
        </>
    );
};

export default Cartg;