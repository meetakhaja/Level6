var products = [
  {
    name: "male model",
    headline: "photo shoting",
    price: "30,000",
    Image:
      "https://images.unsplash.com/photo-1708022799750-afbe4be26f73?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "rail vlogger",
    headline: "shouting",
    price: "10,000",
    Image:
      "https://images.unsplash.com/photo-1707500879902-c9c319a61055?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "temple",
    headline: "best place in the world",
    price: "5,00,000",
    Image:
      "https://images.unsplash.com/photo-1708075207055-269ec68c323c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var popular = [
  {
    name: "line red land",
    headline: "photo shoting place",
    price: "30,000",
    Image:
      "https://plus.unsplash.com/premium_photo-1691031429917-777e3123e30d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "rail vlogger",
    headline: "shouting",
    price: "10,000",
    Image:
      "https://images.unsplash.com/photo-1707500879902-c9c319a61055?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "temple",
    headline: "best place in the world",
    price: "5,00,000",
    Image:
      "https://images.unsplash.com/photo-1708075207055-269ec68c323c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
var cart = [];

function addproducts() {
  var clutter = "";
  products.forEach(function (product, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
    <img class="w-full h-full object-cover" src="${product.Image}" />
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
            </div>
            <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
            data-index="${index}" class="add ri-add-line"></i></button>
        </div>
    </div>
</div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}
function addPopularProduct() {
  var clutter = "";
  popular.forEach(function (product) {
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.Image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
        </div>
    </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}
function addToCard() {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        cart.push(products[details.target.dataset.index]);
      }
    });
}
function showCart() {
  document.querySelector(".carticon").addEventListener("click", function () {
    document.querySelector(".cartexpnd").style.display = "block";

    var clutter = "";
    cart.forEach(function (prod, index) {
      clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover" src="${prod.Image}" />
            </div>
            <div>
            <h3 class="font-semibold">${prod.name}</h3>
            <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
            </div>
            </div>`;
    });
    document.querySelector(".cartexpnd").innerHTML = clutter;
  });
}
addproducts();
addPopularProduct();
addToCard();
showCart();
