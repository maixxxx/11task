const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["P (1).jpg", "P (2).jpg", "P (3).jpg", "P (4).jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    image.style = images[randomIndex];
    image.src = "images/P (2).jpg";
    image.src = "images/P (3).jpg";
    image.src = "images/P (4).jpg";
    

}