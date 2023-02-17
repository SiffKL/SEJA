const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

fetch("https://sejammd-d3cb.restdb.io/rest/jewellery/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("h1").textContent = product.productname;

  document.querySelector(".gender").textContent = product.gender;

  document.querySelector(".price").textContent = product.price + "DKK";

  document.querySelector(".discounted").textContent =
    "-" + product.discount + "%";

  document.querySelector(
    ".productimg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
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
];

// __________________________________________________
