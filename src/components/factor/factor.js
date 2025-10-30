import { products } from "../constants/product";

export function Factor() {
  let container = document.createElement("div");
  container.classList.add(
    "md:flex",
    "md:justify-center",
    "md:w-full",
    "lg:w-[30%]",
    "text-lg"
  );

  let containerChild = document.createElement("div");
  containerChild.classList.add(
    "h-[360px]",
    "bg-[#00c8c4]",
    "rounded-2xl",
    "p-5",
    "flex",
    "flex-col",
    "gap-3",
    "text-lg",
    "md:w-[70%]",
    "lg:w-full"
  );

  containerChild.innerHTML = `
    <div class="flex justify-between">
      <div>جمع کل سفارشات:</div>
      <div id="cartTotal">0 تومان</div>
    </div>
    <div class="flex justify-between">
      <div>حق سرویس و کارمزد:</div>
      <div id="fee">0 تومان</div>
    </div>
    <div class="flex justify-between">
      <div>تخفیف:</div>
      <div id="discountItem" data-value="0">0 تومان</div>
    </div>
    <div>
      <div class="flex">
        <input type="text" placeholder="کد تخفیف را وارد کنید" class="bg-white py-1 w-[90%] rounded-r-sm outline-[#02848d] placeholder:text-gray-400 placeholder:text-sm px-1" id="input">
        <button class="bg-[#02848d] w-[10%] rounded-l-sm cursor-pointer text-white" id="inputBtn">✓</button>
      </div>
      <div class="font-bold text-sm text-[#d52820]" id="error"></div>
    </div>
    <div class="flex flex-col justify-end h-[250px] gap-3">
      <div class="flex justify-between bg-yellow-300 w-full py-1 px-4 rounded-sm">
        <div>مبلغ قابل پرداخت:</div>
        <div id="finalPriceFactor">0 تومان</div>
      </div>
      <button class="bg-[#02848d] w-full py-3 rounded-sm text-white cursor-pointer shadow-xl" id="submitOrder">ثبت سفارش</button>
    </div>
  `;
  container.appendChild(containerChild);
  return container;
}

export function UpdateCartToal() {
  let cartTotal = document.getElementById("cartTotal");
  let fee = document.getElementById("fee");
  let inputBtn = document.getElementById("inputBtn");
  let finalPriceFactor = document.getElementById("finalPriceFactor");
  let sum = 0;
  products.forEach((item) => {
    sum += item.quantity * item.price;
  });
  cartTotal.innerText = sum.toLocaleString() + " تومان";

  // fee
       let finalFeePrice = sum * 0.09;
       fee.innerText = finalFeePrice + " تومان";

      // discount
      inputBtn.addEventListener("click", function () {
        let discountedPrice = sum;
        let discountItem = document.getElementById("discountItem");
        let inputVal = document.getElementById("input").value.trim();
        let error = document.getElementById("error")

        let discountePercent = 0;
        if (inputVal.toLowerCase() === "gold") {
          discountePercent = 20;
          error.textContent = " ";
          inputBtn.style.backgroundColor = "#02848d";
          inputBtn.innerText = "✓";
        } else if (inputVal.toLowerCase() === "silver") {
          discountePercent = 15;
          error.textContent = " ";
          inputBtn.style.backgroundColor = "#02848d";
          inputBtn.innerText = "✓";
        } else if (inputVal.toLowerCase() === "bronze") {
          discountePercent = 10;
          error.textContent = " ";
          inputBtn.style.backgroundColor = "#02848d";
          inputBtn.innerText = "✓";
        } else if(inputVal.toLowerCase() === ""){
          error.textContent = "کد تخفیفی اعمال نشده است";
          inputBtn.style.backgroundColor = "gainsboro";
          error.style.color = "gainsboro";
          inputBtn.innerText = "!";
        }
         else {
          error.textContent = "کد تخفیف شما معتبر نیست";
          inputBtn.style.backgroundColor = "#d52820";
          inputBtn.innerText = "X";
        }

        discountedPrice = (sum * discountePercent) / 100;
        discountItem.innerText = discountedPrice + " تومان";

        // final Amount
        let finalAmount = sum + finalFeePrice - discountedPrice;
        finalPriceFactor.innerText = finalAmount + " تومان";
      });
}

export function SubmitOrder(){
  let submitOrder = document.getElementById("submitOrder");
  let cartTotal = document.getElementById("cartTotal");
  
  submitOrder.addEventListener("click" , function(){
    if(cartTotal.innerText !== "0 تومان"){
     submitOrder.textContent = " سفارش شما با موفقیت ثبت شد";
     submitOrder.style.backgroundColor = "#013f01";
    }
    else{
       submitOrder.textContent = "لطفا سفارش خود را ثبت کنید";
       submitOrder.style.backgroundColor = "#8d0202";
    }
  })
}
