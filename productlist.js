// const myUrl = 'https://mydb-fafc.restdb.io/rest/people?q={"$distinct": "jewellery"}';

// const myUrl = "https://sejammd-d3cb.restdb.io/rest/jewellery";

// fetch(myUrl, {
//   method: "get",
//   headers: {
//     "x-apikey": "63ef83b8478852088da683ec",
//   },
// })

fetch("https://sejammd-d3cb.restdb.io/rest/jewellery", {
  method: "get",
  headers: {
    "x-apikey": "63ef83b8478852088da683ec",
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showproduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.category;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".subtle").textContent = product.articletype;
  copy.querySelector(".discounted").textContent = product.discount;

  //produktet er udsolgt
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  copy.querySelector(".buy_now").setAttribute("href", `product.html?id=${product.id}`);
  //append
  document.querySelector("main").appendChild(copy);
}

//

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
