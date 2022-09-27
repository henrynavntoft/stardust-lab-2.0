//connecting to our database
const url = "https://keamedias2-d747.restdb.io/rest/stardust-lab";
const key = {
  headers: {
    "x-apikey": "632f698a32330102d591d19a",
  },
};

fetch(url, key)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

//now we are fetching the data
function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  //Selecting template and cloning
  const temp = document.querySelector("template").content;
  const clone = temp.cloneNode(true);
  // Change stuff
  // display item name
  clone.querySelector("p.bestsellers-product-name").textContent =
    product.productdisplayname;
  //show price
  clone.querySelector("p.bestsellers-product-price").textContent =
    product.price + ",-";
  clone.querySelector("a.buy-now-but").href = `product.html?id=${product.id}`;
  clone.querySelector("img.bestsellers-product-image").src = product.img_url;
  //Selection where i want the clone
  const parent = document.querySelector(".bestsellers-grid");
  //Appending it
  parent.appendChild(clone);
}
