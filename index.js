
const categoriUrl = './images/catogories/';
const offersUrl = './images/offers/';

const imageContaier = document.getElementById('content');
const brandItems = document.getElementById('brands');
const itemCount = document.getElementById('itemCount');

//    CATEGORIES IMAGES PUTTING IN DOM
addItemsDOM(imageContaier, 10, categoriUrl, '.jpg');

//         OFFER IMAGES PUTTING IN DOM    

addItemsDOM(brandItems, 12, offersUrl, '.png');
function addItemsDOM(container, imgCount, rootUrl, ext){

    for(let i = 1; i<=imgCount; i++){
    container.innerHTML +=  `
    <a href="./shopping.html"><img class="w-36 my-3 sm:w-60 cursor-pointer" src="${rootUrl+i+ext}"></img></a>`
    };

}

let bagStr = localStorage.getItem('bag');
if(bagStr){
    bag = JSON.parse(bagStr);
    if(bag.length > 0){
          itemCount.style.display = 'block';
        itemCount.innerHTML = bag.length;
    }else{
        itemCount.style.display = 'none';
    }

}else{
    itemCount.style.display = 'none';
}
