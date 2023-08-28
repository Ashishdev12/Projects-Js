const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Black & Red Air Jordan",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./Image's/red and black sneakers.png",
      },
      {
        code: "darkblue",
        img: "./Image's/red and black sneakers - Copy.png",
      },
    ],
  },
  {
    id: 2,
    title: "Nike Air Jordan IV",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./Image's/nike air jordan 4.webp",
      },
      {
        code: "green",
        img: "./Image's/nike air jordan 4 - Copy.webp",
      },
    ],
  },
  {
    id: 3,
    title: "Nike Air Jordan XIII",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./Image's/nike air jordon 13.png",
      },
      {
        code: "green",
        img: "./Image's/nike air jordon 13 - Copy.png",
      },
    ],
  },
  {
    id: 4,
    title: "Air Jordan VII",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./Image's/nike air jordon 7.webp",
      },
      {
        code: "lightgray",
        img: "./Image's/nike air jordon 7 - Copy.webp",
      },
    ],
  },
  {
    id: 5,
    title: "Air Jordan Ranging Bull",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./Image's/air jordon ranging bull.png",
      },
      {
        code: "black",
        img: "./Image's/air jordon ranging bull - Copy.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelector(".color");
const currentProductSizes = document.querySelector(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () =>{
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw`;

    // change the choosen product

  });
});