const url = `https://kea-alt-del.dk/t7/api/products?limit=20&start=2000`;

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

// Just checking
function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  //Selecting template and cloning
  const temp = document.querySelector("template").content;
  const clone = temp.cloneNode(true);
  // Change stuff
  clone.querySelector("p.product-list-name").textContent =
    product.productdisplayname;
  clone.querySelector("p.product-list-price").textContent =
    product.price + ",-";
  clone.querySelector("a.buy-now-but").href = `product.html?id=${product.id}`;
  clone.querySelector(
    "img.product-list-image"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  //Selection where i want the clone
  const parent = document.querySelector(".product-list-grid");
  //Appending it
  parent.appendChild(clone);
}
