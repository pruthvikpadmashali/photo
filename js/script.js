// headder
var button = document.getElementById("toggle-scroll-button");
var scrollingEnabled = true;
button.addEventListener("click", function (e) {
    currentScrollPosition = window.scrollY;
    if (scrollingEnabled) {
        window.onscroll = function () {
            window.scrollTo(0, currentScrollPosition);
        }
        scrollingEnabled = false;
    } else {
        window.onscroll = null;
        scrollingEnabled = true;
    }
});

var icon = document.getElementById("icon");
icon.addEventListener("click", changeIcon);

function changeIcon() {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

}

// Animations

// from up 

let timer = 0;
window.addEventListener('load', (event) => {
    let intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(function () { entry.target.classList.add('up'); }, timer);
                timer += 50;  //chonge
                intersectionObserver.unobserve(entry.target);
                setTimeout(function () { timer = 0; }, 5000)
            }
        });
    });
    document.querySelectorAll('.about-me').forEach(obj => {
        intersectionObserver.observe(obj);
    });
    document.querySelectorAll('.img-cointain2').forEach(obj1 => {
        intersectionObserver.observe(obj1);
    });

    
});

// from down

let timee = 0;
window.addEventListener('load', (event) => {
    let intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(function () { entry.target.classList.add('down'); }, timee);
                timee += 50;  //chonge
                intersectionObserver.unobserve(entry.target);
                setTimeout(function () { timee = 0; }, 5000)
            }
        });
    });
    document.querySelectorAll('.home-main').forEach(obj4 => {
        intersectionObserver.observe(obj4);
    });
    document.querySelectorAll('.contact-box2').forEach(obj5 => {
        intersectionObserver.observe(obj5);
    });
});


// popup Animation

let timerr = 0;
window.addEventListener('load', (event) => {
    let intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(function () { entry.target.classList.add('animate-pop'); }, timerr);
                timerr += 50;  //chonge
                intersectionObserver.unobserve(entry.target);
                setTimeout(function () { timerr = 0; }, 10000)
            }
        });
    });
    
    document.querySelectorAll('.img-cointain').forEach(obj1 => {
        intersectionObserver.observe(obj1);
    });
    document.querySelectorAll('.imgsampl').forEach(obj2 => {
        intersectionObserver.observe(obj2);
    });
});

// slide from left

let time = 0;
window.addEventListener('load', (event) => {
    let intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(function () { entry.target.classList.add('services'); }, time);
                time += 50;  //chonge
                intersectionObserver.unobserve(entry.target);
                setTimeout(function () { time = 0; }, 5000)
            }
        });
    });
    document.querySelectorAll('.services h2').forEach(obj1 => {
        intersectionObserver.observe(obj1);
    });
    document.querySelectorAll('.leave').forEach(obj2 => {
        intersectionObserver.observe(obj2);
    });
    document.querySelectorAll('.sampheading h1').forEach(obj3 => {
        intersectionObserver.observe(obj3);
    });
    document.querySelectorAll('.heading-text').forEach(obj4 => {
        intersectionObserver.observe(obj4);
    });
    document.querySelectorAll('.mee-headding').forEach(obj5 => {
        intersectionObserver.observe(obj5);
    });
    document.querySelectorAll('.self-meee').forEach(obj5 => {
        intersectionObserver.observe(obj5);
    });
});

// hjkjlndfkm

