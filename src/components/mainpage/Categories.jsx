import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg:
        "https://media.istockphoto.com/id/1320439996/vector/dress-formal.jpg?s=1024x1024&w=is&k=20&c=KBpyg0DcM3uxWYhXhgP7DRiT8nVQOocYebG55fUcnAM=",
      cateName: "Fashion",
    },
    {
      cateImg:
        "https://media.istockphoto.com/id/1125861466/vector/simple-icons-set-bw-white-background.jpg?s=1024x1024&w=is&k=20&c=aefWdLd-s6gfdBuVxEYPsq7IavAnbkAjdimQWcfMCNs=",
      cateName: "Electronic",
    },
    {
      cateImg:
        "https://media.istockphoto.com/id/1273534607/vector/car-icon-auto-vehicle-isolated-transport-icons-automobile-silhouette-front-view-sedan-car.jpg?s=1024x1024&w=is&k=20&c=1uSr9LuEF1zoBW7drj0VJ7CG9CVbqK_mR2A7RQyLxew=",
      cateName: "Cars",
    },
    {
      cateImg:
        "https://media.istockphoto.com/id/1147474576/vector/thyme-rosemary-line-icon.jpg?s=1024x1024&w=is&k=20&c=FlS5BQwuOp_BWI3uLsMrHVi8yrgXt9nbnrpvjWQochM=",
      cateName: "Home & Garden",
    },
    {
      cateImg:
        "https://media.istockphoto.com/id/912149768/vector/simple-gift-box-icon-single-color-design-element-isolated-on-white-gift-giving-and-receiving.jpg?s=1024x1024&w=is&k=20&c=aNEx02pacIB9ul-HyTQfktEXiPRZleIsJTzSk7K5w1o=",
      cateName: "Gifts",
    },
    {
      cateImg:
        "https://media.istockphoto.com/id/1298266863/vector/retro-microphone-vector-sign.jpg?s=1024x1024&w=is&k=20&c=gCsYZX6qQVIM71JUNdzM0GduOVu3wNt0bh--0pkYVHk=",
      cateName: "Music",
    },
    {
      cateImg:
        "https://media.istockphoto.com/id/1269517302/vector/vector-image-of-pet-logo-on-white.jpg?s=1024x1024&w=is&k=20&c=X0k4ka_7_XDOVhvgdSUIBA9ma4Vabw4qwhElRi07nLw=",
      cateName: "Pets",
    },
    {
      cateImg:
        "https://media.istockphoto.com/id/1226121071/vector/man-with-barbell-solid-icon-bodybuilding-concept-weightlifter-sign-on-white-background-man.jpg?s=1024x1024&w=is&k=20&c=9bYr-svB-FDpNr_4TkKydSG2vv5zSZtU_bfttRgeudU=",
      cateName: "Health & Beauty",
    },
    {
      cateImg:
        "https://media.istockphoto.com/id/538450204/vector/baby-rattle-vector-symbol-icon-design.jpg?s=1024x1024&w=is&k=20&c=VrgpU9ekb5u-WEjGWiOIhreZ1BrBo2XjyOJuq4NPwBI=",
      cateName: "Baby Toys",
    },
    {
      cateImg:
        "https://media.istockphoto.com/id/1303514193/vector/food-paper-bag-icon.jpg?s=1024x1024&w=is&k=20&c=26lK-JajhhoEsGNk-mO2uPg7rPgXgf5mYks_ISVNJdU=",
      cateName: "Groceries",
    },
    {
      cateImg:
        "https://media.istockphoto.com/id/1299881346/vector/open-book-and-human-head-solid-icon-online-education-concept-knowledge-sign-on-white.jpg?s=1024x1024&w=is&k=20&c=FuJQj1BZ7Eng3AiCao63T_5SWT-g-_DszbfKtVJi4Rs=",
      cateName: "Books",
    },
  ];
  console.log(data);

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
