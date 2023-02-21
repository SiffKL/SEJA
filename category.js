fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(categories) {
  categories.forEach(showCategory);
}

function showCategory(product) {
  //fange template
  const template = document.querySelector(".templatecategories").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //   copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector("a").textContent = product.category;
  copy.querySelector("a").href = `products.html?category=${product.category}`;
  document.querySelector("main .ul").appendChild(copy);
}
