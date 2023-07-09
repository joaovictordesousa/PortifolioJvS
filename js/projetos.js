let images = Array.from(document.getElementsByClassName("imgCarosel"));
let mainPhoto = document.getElementById("mainPhoto");
let initialMainPhotoSrc = mainPhoto.src;

function updateImage(event) {
    let image = event.target;
    let tempSrc = mainPhoto.src;
    mainPhoto.src = image.src;
    image.src = tempSrc;
}

images.forEach(function(image) {
    image.addEventListener("click", updateImage);
});