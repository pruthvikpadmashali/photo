// darkcard

document.getElementById("darkcards").onmousemove = e => {
    for (const darkcard of document.getElementsByClassName("darkcard")) {
        const rect = darkcard.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        darkcard.style.setProperty("--mouse-x", `${x}px`);
        darkcard.style.setProperty("--mouse-y", `${y}px`);
    };
}


        // birthday
        document.getElementById("scroll-button-birthday").addEventListener("click", function () {
            window.location.href = "html/gallery.html#target-element-birthday";
        });

        document.getElementById("scroll-button-wedding").addEventListener("click", function () {
            window.location.href = "html/gallery.html#target-element-wedding";
        });
        
        document.getElementById("scroll-button-corporate").addEventListener("click", function () {
            window.location.href = "html/gallery.html#target-element-corporate";
        });
        
        document.getElementById("scroll-button-pre-wedding").addEventListener("click", function () {
            window.location.href = "html/gallery.html#target-element-pre-wedding";
        });
        
        document.getElementById("scroll-button-baby-shower").addEventListener("click", function () {
            window.location.href = "html/gallery.html#target-element-baby-shower";
        });
        
        document.getElementById("scroll-button-maternity").addEventListener("click", function () {
            window.location.href = "html/gallery.html#target-element-maternity";
        });