console.log('Jay Shree Krishna');

const cartItems = document.getElementById('cartItems');
const itemPrice = document.getElementById('item-price')
const setItemCount = document.getElementById('itemCount');
const totalItemPrice = document.getElementById('totalPrice');
const discountTotal = document.getElementById('DiscountMRP');   
const convfee = document.getElementById('convFee');
const totalPrice = document.getElementById('masterTotal');
let removeBtn;
function displayCartItem (data, cartItems){
if(data.length > 0){
    data.forEach((element,index) => {
 
        if(index === 0){
            cartItems.innerHTML = `
            <div class="flex items-start relative justify-start">
            <img class="w-28 sm:w-44" src="${element.image}" alt="">
            <div>
                <div class="w-full text-gray-950 font-semibold pl-7 text-md">${element.company}</div>
                <div class="w-48 sm:w-full text-gray-700 font-semibold truncate pl-7 text-sm">${element.item_name}</div>
                <div class="w-full text-gray-950 font-semibold pl-7 text-sm mb-6"><span>₹ ${element.current_price}</span> <span
                        class="text-gray-500 line-through">₹ ${element.original_price}</span>
                    (<span class="text-orange-700">${element.discount_percentage}% off</span>)</div>
                <p class="text-gray-500 pl-7"><span class="font-sans font-semibold text-black">${element.return_period} days</span>
                    returns available</p>
                <div class="text-sm font-sans pl-7">Delivered by <span class="text-green-700">${element.delivery_date}</span>
                </div>
            </div>
            <button class="absolute right-0 top-0 remove" id="${element.id}">
     
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-x">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
            `
        }else{

            cartItems.innerHTML += `
            <div class="flex items-start relative justify-start">
            <img class="w-28 sm:w-44" src="${element.image}" alt="">
            <div>
                <div class="w-full text-gray-950 font-semibold pl-7 text-md">${element.company}</div>
                <div class="w-48 sm:w-full text-gray-700 font-semibold truncate pl-7 text-sm">${element.item_name}</div>
                <div class="w-full text-gray-950 font-semibold pl-7 text-sm mb-6"><span>₹ ${element.current_price}</span> <span
                        class="text-gray-500 line-through">₹ ${element.original_price}</span>
                    (<span class="text-orange-700">${element.discount_percentage}% off</span>)</div>
                <p class="text-gray-500 pl-7"><span class="font-sans font-semibold text-black">${element.return_period} days</span>
                    returns available</p>
                <div class="text-sm font-sans pl-7">Delivered by <span class="text-green-700">${element.delivery_date}</span>
                </div>
            </div>
            <button class="absolute right-0 top-0 remove" id="${element.id}">
     
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-x">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>`
        }
    });

    cartItems.innerHTML += `
    <a class="self-center w-full" href="shopping.html">
    <button class="bg-pink-600 text-white text-center py-1 my-4 uppercase w-full">buy more</button>
  </a>
    `;

    removeBtn = document.querySelectorAll('.remove');
    calculatePrice(bag, totalItemPrice, discountTotal, convfee, totalPrice, 99);
    removeItem(removeBtn);
}else{
cartItems.innerHTML = `
<h1 class="text-3xl font-sans font-semibold capitalize text-center">Your bag is empty !</h1>
<img class="w-5/12 self-center my-4" src="https://htmlstream.com/front/assets/svg/illustrations/oc-empty-cart.svg" alt="Empty Bag">
<a class="self-center w-full" href="shopping.html">
  <button class="bg-pink-600 text-white text-center py-1 my-4 uppercase w-full">go to shop</button>
</a>
`;
}
}
displayCartItem(bag, cartItems);



function removeItem(btnElem){
    if(btnElem){
    
        btnElem.forEach((elem)=>{
            elem.addEventListener('click', (ev)=>{
                let item = bag.findIndex((element)=> element.id == elem.id);
                // console.log(bag[item]);
                bag.splice(item,1);
              elem.parentElement.remove();
              setItemCount.innerHTML = bag.length;
              calculatePrice(bag, totalItemPrice, discountTotal, convfee, totalPrice, 99);
              localStorage.setItem('bag', JSON.stringify(bag));

              if(bag.length === 0){
                  cartItems.innerHTML = `
          <h1 class="text-3xl font-sans font-semibold capitalize text-center">Your bag is empty</h1>
          <img class="w-5/12 self-center my-4" src="https://htmlstream.com/front/assets/svg/illustrations/oc-empty-cart.svg" alt="Empty Bag">
          <a class="self-center w-full" href="shopping.html">
            <button class="bg-pink-600 text-white text-center py-1 my-4 uppercase w-full">go to shop</button>
          </a>
          `;
              }
            });
        })
    }else{
        console.log('kux To Galat hai');
    }


}; 

function calculatePrice(bag, total, discount, conv, master, fee){
    let totalPrice = 0;
    let discountAmount = 0;
    let convFee = fee;
    let masterTotal;
    bag.forEach((elem)=>{
        totalPrice += elem.original_price;
        discountAmount += (elem.original_price - elem.current_price);
    });
    total.innerHTML = `Rs ${totalPrice}`;
    discount.innerHTML = `- Rs ${discountAmount}`;
    conv.innerHTML = convFee;
    masterTotal = (totalPrice - discountAmount) + convFee;
    master.innerHTML = masterTotal;
}