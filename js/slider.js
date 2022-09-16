const images = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg',
];

let imgIndex = 0;

const img = document.getElementById('carousel-img');

setInterval(() => {
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    img.setAttribute('src', imgLink)
    console.log(imgLink)
    imgIndex++
}, 1000)

















