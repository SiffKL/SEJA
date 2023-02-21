const urlParams = new URLSearchParams(window.location.search);
const myCategory = urlParams.get("category");

fetch(
  `https://sejammd-d3cb.restdb.io/rest/jewellery?q={"category":"${myCategory}"}`,
  {
    method: "get",
    headers: {
      "x-apikey": "63ef83b8478852088da683ec",
    },
  }
)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showproduct
  // products.forEach((product) => showProduct(product));
  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector(".price").textContent = product.price + " DKK";
  copy.querySelector("h1").textContent = product.productname;
  copy.querySelector(".gender").textContent = product.gender;
  copy.querySelector(".category").textContent = product.category;
  copy.querySelector(".brandname").textContent = product.brandname;
  copy.querySelector(".material").textContent = product.material;
  copy.querySelector(".productimg").src = `img/${product.image}`;
  copy
    .querySelector(".buy_now")
    .setAttribute("href", "product.html?id=" + product._id);
  // copy.querySelector("img").srcContent = product.image;
  // copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  //hvis udsalg
  if (product.discount) {
    copy.querySelector(".discount").classList.add("sale");
    copy.querySelector(".discounted").textContent =
      "- " + product.discount + " %";
    copy.querySelector(".price").classList.add("prevprice");
    const originalPrice = product.price;
    const discountPercentage = product.discount;
    const newprice = originalPrice * (discountPercentage / 100);
    copy.querySelector(".newprice").textContent = "NOW " + newprice + " DKK";

    // document.querySelector(".price").remove();
  } else {
    copy.querySelector(".newprice").remove();
  }

  //hvis udsolgt produkt
  if (product.soldout) {
    copy.querySelector(".productimg").classList.add("overlay");
    // copy.querySelector(".soldout").classList.add(".soldoutp");
  } else {
    copy.querySelector(".soldout").remove();
  }
  //append
  document.querySelector("main").appendChild(copy);
}

// <article class="grid">
//   <template id="smallProductTemplate">
//     <article class="product">
//       <img src="https://sejammd-d3cb.restdb.io/media/63e9fca3aa86075000050c6c" alt="Ring" />
//       <h2>Flame Earrings Big</h2>
//       <h2 class="price"><span>Prev</span>759 DKK</h2>
//       <h3 class="subtle">Earrings | Women</h3>
//       <div class="discounted">
//         <p>Now 379,5 DKK</p>
//         <p>-50%</p>
//       </div>
//       <h2 class="material">Sterling Silver</h2>
//       <button><a class="buy_now" href="product.html"><img src="SVG/bot.svg" alt="Buy button"></a></button>
//     </article>
//   </template>
// </article>
