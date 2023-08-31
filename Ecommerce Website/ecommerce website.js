const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Black & Red Air Jordan",
    price: 120,
    colors: [
      {
        code: "black",
        img: "Image's/red and black sneakers.png",
      },
      {
        code: "darkblue",
        img: "Image's/Jordon-13-Copy.png ",
      },
    ],
  },
  {
    id: 2,
    title: "Nike Air Jordan IV",
    price: 160,
    colors: [
      {
        code: "lightgray",
        img: "Image's/Jordon-4.png",
      },
      {
        code: "green",
        img: "Image's/Jordon-4-Copy.png",
      },
    ],
  },
  {
    id: 3,
    title: "Nike Air Jordan XIII",
    price: 180,
    colors: [
      {
        code: "lightgray",
        img: "Image's/Jordon-13.png",
      },
      {
        code: "green",
        img: "Image's/red and black sneakers-C.png",
      },
    ],
  },
  {
    id: 4,
    title: "Air Jordan VII",
    price: 200,
    colors: [
      {
        code: "black",
        img: "Image's/Jordon-7.png",
      },
      {
        code: "lightgray",
        img: "Image's/air jordon ranging bull-C.png",
      },
    ],
  },
  {
    id: 5,
    title: "Air Jordan Ranging Bull",
    price: 220,
    colors: [
      {
        code: "gray",
        img: "Image's/air jordon ranging bull.png",
      },
      {
        code: "black",
        img: "Image's/Jordon-7-Copy.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".ProductPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () =>{
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw`;

    // change the choosen product
    choosenProduct = products[index];

    // change texts of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // assigning new colors
    currentProductColors.forEach((color, index) =>{
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

  currentProductColors.forEach((color, index) =>{
    color.addEventListener("click", () =>{
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });

  currentProductSizes.forEach((size, index) =>{
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) =>{
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");

  productButton.addEventListener("click", () =>{
    payment.style.display = "flex";
  });

  close.addEventListener("click", () =>{
    payment.style.display = "none";
  })