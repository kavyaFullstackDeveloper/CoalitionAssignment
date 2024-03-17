let imgSlider = document.querySelector('.history img')
let indicator = document.querySelectorAll('.footer .slideIndicator span')
let imgs = ['assets/2-1.png', 'assets/2-2.png', 'assets/2-1.png', 'assets/2-2.png'];
let time = 3000
let i = 0;


function slideImages() {
    indicator.forEach((el) => {
        el.classList.remove("active");
    })
    imgSlider.src = imgs[i]
    indicator[i].classList.add("active");
    
    
    if(i < imgs.length-1) {
        i++
    } else {
        i = 0
    }

    setTimeout(() => {
        slideImages()
    }, time);
}

window.onload = slideImages;