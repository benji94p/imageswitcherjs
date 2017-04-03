let imageOne = document.querySelector ("#img1");
let imageTwo = document.querySelector ("#img2");
let imageThree = document.querySelector ("#img3");
let imageFour = document.querySelector ("#img4");
let pRefresh = document.querySelector ("#refresh-p");
let hover = document.querySelector ("#hover");


let imageNumber = 0;

    imageTwo.style.display = "none";
    imageThree.style.display = "none";
    imageFour.style.display = "none";
    imageOne.style.display = "";
    pRefresh.style.display = "none";

 imageOne.addEventListener("mouseenter", intervallFunction);

function intervallFunction () {
    console.log("Mouseoverimages");
    setInterval(changeImage, 2000);
}

function changeImage () {

    imageNumber++ ;

    if (imageNumber == 0) {
    imageTwo.style.display = "none";
    imageThree.style.display = "none";
    imageFour.style.display = "none";
    imageOne.style.display = "";
    imageOne.classList.add("fadingimages");
    document.getElementById("number").innerHTML = "0";
}

    else if (imageNumber == 1) {
    imageTwo.style.display = "";
    imageThree.style.display = "none";
    imageFour.style.display = "none";
    imageOne.style.display = "none";
    imageTwo.classList.add("fadingimages");
    document.getElementById("number").innerHTML = "2";
}

    else if (imageNumber == 2) {
    imageTwo.style.display = "none";
    imageThree.style.display = "";
    imageFour.style.display = "none";
    imageOne.style.display = "none";
    imageThree.classList.add("fadingimages");
    document.getElementById("number").innerHTML = "3";
}
    else if (imageNumber == 3) {
    imageTwo.style.display = "none";
    imageThree.style.display = "none";
    imageFour.style.display = "";
    imageOne.style.display = "none";
    imageFour.classList.add("fadingimages");
    document.getElementById("number").innerHTML = "4";

}
    else if (imageNumber == 4) {
    imageTwo.style.display = "none";
    imageThree.style.display = "none";
    imageFour.style.display = "none";
    imageOne.style.display = "none";
    pRefresh.style.display = "";
    hover.style.display = "none";
    pRefresh.classList.add("fadingimages");
    document.getElementById("number").innerHTML = "";

}

}

window.onkeypress = function(event) {
    if (event.keyCode == 13){
        window.location.reload();
    }
}
