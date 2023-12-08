let rootUrl = './images/catogories/';
const totalImages = 10;

let imageContaier = document.getElementById('content');

for (let i = 1; i<=totalImages; i++){
    let img = document.createElement('img');
    img.width = 240;
    img.classList.add('cursor-pointer')
    img.src = rootUrl + i + '.jpg';
    imageContaier.appendChild(img);
}

