const myUrl = "https://sejammd-d3cb.restdb.io/home/db/sejammd-d3cb/cards/63e9f933aa8607500004fc68";

fetch(myUrl)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showproduct
  products.forEach(showProduct);
}
