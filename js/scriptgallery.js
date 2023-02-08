
// popup

const thumbnails = document.querySelectorAll('.thumbnail');
const popup = document.querySelector('#popup');
const fullSize = document.querySelector('#full-sized-image');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const close = document.querySelector('#close');

let currentIndex = 0;

function showImage(index) {
    currentIndex = index;
    fullSize.src = thumbnails[index].dataset.fullSize;
}

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        popup.style.display = 'block';
        currentIndex = [...thumbnails].indexOf(this);
        fullSize.src = this.dataset.fullSize;
        showImage(index);
    });
});

previous.addEventListener('click', () => {
    currentIndex = (currentIndex + thumbnails.length - 1) % thumbnails.length;
    fullSize.src = thumbnails[currentIndex].dataset.fullSize;
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    fullSize.src = thumbnails[currentIndex].dataset.fullSize;
});


close.addEventListener('click', () => {
    popup.style.display = 'none';
});


document.addEventListener("keydown", function (event) {
    if (popup.style.display === 'block') {
        if (event.key === "ArrowLeft") {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = thumbnails.length - 1;
            }
            showImage(currentIndex);
        } else if (event.key === "ArrowRight") {
            currentIndex++;
            if (currentIndex >= thumbnails.length) {
                currentIndex = 0;
            }
            showImage(currentIndex);
        } else if (event.key === "Escape") {
            popup.style.display = 'none';

        }
    }
});


// perticular element

document.getElementById("scroll-button-wedding").addEventListener("click", function () {
    const targetElement = document.getElementById("target-element-wedding");
    targetElement.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scroll-button-birthday").addEventListener("click", function () {
    const targetElement = document.getElementById("target-element-birthday");
    targetElement.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scroll-button-pre-wedding").addEventListener("click", function () {
    const targetElement = document.getElementById("target-element-pre-wedding");
    targetElement.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scroll-button-corporate").addEventListener("click", function () {
    const targetElement = document.getElementById("target-element-corporate");
    targetElement.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scroll-button-maternity").addEventListener("click", function () {
    const targetElement = document.getElementById("target-element-maternity");
    targetElement.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scroll-button-baby-shower").addEventListener("click", function () {
    const targetElement = document.getElementById("target-element-baby-shower");
    targetElement.scrollIntoView({ behavior: "smooth" });
});

