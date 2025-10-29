import { products } from "../constants/product";

export function RenderItems() {
  let container = document.createElement("div");
  container.classList.add(
    "w-full",
    "h-[600px]",
    "bg-[#00c8c4]",
    "rounded-2xl",
    "text-center",
    "font-bold",
    "p-7",
    "lg:w-[70%]"
  );
  let title = document.createElement("div");
  title.classList.add("mb-10", "text-white", "text-3xl");
  title.innerText = "رستوران مک دونالد شعبه تهران";
  container.appendChild(title);
  let product = document.createElement("div");
  product.classList.add(
    "grid",
    "grid-cols-1",
    "md:grid-cols-2",
    "gap-5",
    "h-[430px]",
    "md:h-[460px]",
    "overflow-y-auto",
    "pl-2"
  );
  products.forEach((item) => {
    let list = document.createElement("div");
    list.innerHTML = `
       <div
        class="h-auto p-5 bg-[#def3fd] rounded-xl flex flex-col gap-10 items-center lg:flex-row lg:items-center lg:h-fit lg:gap-3 relative shadow-xl">
        <div class="w-[100px]">
          <img src="${item.image}" alt="">
        </div>
        <div class="flex flex-col items-center gap-4 lg:items-start">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col lg:items-start">
              <div class="text-lg font-black">${item.title}</div>
              <div class="font-normal">${item.price} تومان</div>
            </div>
          </div>
          <div class="shadow-xl rounded-lg w-fit">
            <button
              class="add-btn bg-[#02848d] p-0.5 px-2 shadow text-white cursor-pointer rounded-r-lg font-medium">+</button>
            <span class="product-quantity px-2 font-normal">0</span>
            <button class="remove-btn bg-[#02848d] p-0.5 px-2.5 text-white cursor-pointer rounded-l-lg font-medium">-</button>
          </div>
        </div>
        <div class="update-price lg:absolute lg:bottom-5 lg:left-3 font-normal">0 تومان</div>
      </div>
    `;

    //add btn and remove btn
    let addBtn = list.querySelector(".add-btn");
    let removeBtn = list.querySelector(".remove-btn");
    let productCount = list.querySelector(".product-quantity");
    let updatePrice = list.querySelector(".update-price");
    // add items
    addBtn.addEventListener("click", function () {
      if (item.quantity < 10) {
        item.quantity++;
        productCount.innerText = item.quantity;
        updatePrice.innerText = item.price * item.quantity + " تومان";
        // UpdateCartTotal()
      }
    });
    // remove items
    removeBtn.addEventListener("click", function () {
      if (item.quantity > 0) {
        item.quantity--;
        productCount.innerText = item.quantity;
        updatePrice.innerText = item.price * item.quantity + " تومان";
        // UpdateCartTotal()
      }
    });

    product.appendChild(list);
  });
  container.appendChild(product);
  return container;
}
