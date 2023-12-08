
const items = [
    {
        id: '001',
        image: 'images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '002',
        image: 'images/2.jpg',
        company: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '003',
        image: 'images/3.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: 'images/4.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '005',
        image: 'images/5.jpg',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '006',
        image: 'images/6.jpg',
        company: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '007',
        image: 'images/7.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '008',
        image: 'images/8.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    }
];

console.log('Jay Shree Krishna');



const productContainer = document.getElementById('items');
function displayProduct(){

    //  Setting path for images
    items.forEach((elem, index) => {
        elem.image = `./images/product/${index + 1}.jpg`;
    });
    try{

        items.forEach((elem, index) => {
            productContainer.innerHTML += `
            <div class="w-36 sm:w-60 gap-2 sm:gap-0 sm:h-box text-left flex flex-col items-baseline justify-evenly py-5 relative">
            <img class="w-full sm:w-60" src="${elem.image}" alt="">
            <div class="absolute sm:left-10 bottom-3/5 sm:bottom-1/3 bg-gray-300 px-0.5 sm:px-4 py-0.5 sm:py-2 text-xs">
                <span
                    class="text-black after:content[''] after:w-px after:h-3/5 after:bg-black after:absolute re;ative"
                    >${elem.rating.stars}⭐ </span> <span class="text-black ml-1"> ${elem.rating.count}K</span>
            </div>
            <div class="w-full text-gray-950 font-semibold pl-2 sm:pl-7 text-sm sm:text-md">${elem.company}</div>
            <div class="w-full text-gray-700 font-semibold truncate pl-2 sm:pl-7 text-sm">${elem.item_name}</div>
            <div class="w-full text-gray-950 font-semibold pl-2 sm:pl-7 text-xs sm:text-sm"><span>₹ ${elem.current_price}</span> <span class="text-gray-500 line-through">₹ ${elem.original_price}</span>
            (<span class="text-orange-700">${elem.discount_percentage}% off</span>)
            </div>
            <a href="#" class="bg-black text-white w-full text-center py-1 addToBag" id="${elem.id}">Add to Bag</a>
            </div>
            `
        });
    }catch(err){
        console.log(err);
    }
};

displayProduct();

const addTo = document.querySelectorAll('.addToBag');
const bagItem = document.getElementById('itemCount');

let bag;

onLoad();
function onLoad(){

   let bagStr = localStorage.getItem('bag');
   if(bagStr){
    bag = JSON.parse(bagStr);

    bag.forEach((elem) =>{
        let bagElem = document.getElementById(elem.id);
           if(bagElem){
            bagElem.innerHTML = 'Added to Bag';
            bagElem.classList.replace('bg-black', 'bg-green-600');
        console.log(bagElem);
           }else{
            console.log('Tum Bhule Bhatke Ho vaya');
           }
    })
   }else{
    bag = [];
   }
   bagItem.innerHTML = bag.length;

  
}

// FUNCTION ON CLICK ON ADD TO BAG - REMOVE AND ADD ITEMS TO BAG
addTo.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.target.id;
        const item = items.find((elem) => elem.id == id);

        bagUpdate(elem, item, id);
    });
});

// BAG UPDATE - SHOW HOW MANY ITEMS IN BAG 
function bagUpdate(elem, item, id) {
    const index = bag.findIndex((elem) => elem.id == id);

    if (elem.innerHTML == 'Add to Bag') {
        bag.push(item);
        elem.innerHTML = 'Added to Bag';
        elem.classList.replace('bg-black', 'bg-green-600');
    } else {
        if (index !== -1) {
            bag.splice(index, 1);
            elem.innerHTML = 'Add to Bag';
        }
        elem.classList.replace('bg-green-600', 'bg-black');
    }

    bagItem.innerHTML = bag.length;
    localStorage.setItem('bag', JSON.stringify(bag));
}
0