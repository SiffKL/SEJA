console.log("product.js");

// Test link:  http://127.0.0.1:5501/product.html?_id=63eb7dc5aa86075000058b66

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

fetch("https://sejammd-d3cb.restdb.io/rest/jewellery/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63ef83b8478852088da683ec",
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("h1").textContent = product.productname;

  document.querySelector(".gender").textContent = product.gender;

  document.querySelector(".category").textContent = product.category;

  document.querySelector(".price").textContent = product.price + " DKK";

  document.querySelector(".brandname").textContent = product.brandname;

  document.querySelector(".material").textContent = product.material;

  document.querySelector(".productimg").src = `img/${product.image}`;

  //hvis udsalg
  if (product.discount) {
    document.querySelector(".discount").classList.add("sale");
    document.querySelector(".discounted").textContent =
      "- " + product.discount + " %";
    document.querySelector(".price").classList.add("prevprice");
    const originalPrice = product.price;
    const discountPercentage = product.discount;
    const newprice = originalPrice * (discountPercentage / 100);
    document.querySelector(".newprice").textContent =
      "NOW " + newprice + " DKK";
    // document.querySelector(".price").remove();
  } else {
    document.querySelector(".newprice").remove();
  }

  //hvis udsolgt produkt
  if (product.soldout) {
    document.querySelector(".productimg").classList.add("overlay");
    // copy.querySelector(".soldout").classList.add(".soldoutp");
  } else {
    document.querySelector(".soldout").remove();
  }
}
// ______________ Product information ___________________

// https://sejammd-d3cb.restdb.io/rest/jewellery/

[
  {
    _id: "63e9fcc1aa86075000050c70",
    image: "63e9fca3aa86075000050c6c",
    material: "Sterling Silver",
    price: 465,
    productname: "Simple Circle Ring",
    category: "Ring",
    discount: 0,
    gender: "Women",
    soldout: false,
    brandname: "SEJA",
  },
  {
    _id: "63eb7dc5aa86075000058b66",
    productname: "Sun hoops",
    discount: 15,
    material: "Gold",
    price: 300,
    gender: "Women",
    category: "Earrings",
    soldout: true,
    brandname: "SEJA",
    image: "sun-hoops-earrings.webp",
    _created: "2023-02-14T12:25:41.321Z",
    _changed: "2023-02-17T13:45:46.408Z",
    _createdby: "amalia.svejgaard@gmail.com",
    _changedby: "amalia.svejgaard@gmail.com",
    _version: 2,
  },
];

// __________________________________________________

//udsolgt produkt, dette i productslist? husk en overlay styly i css
// if (product.soldout) {
//   copy.querySelector("section").classList.add("overlay");
//   // copy.querySelector(".soldout").classList.add(".soldoutp");
// } else {
//   copy.querySelector(".soldout").remove();
// }

// document.querySelector(".div2 .discounted").textContent =
//   "-" + product.discount + "%";
