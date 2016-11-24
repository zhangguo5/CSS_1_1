window.onload = function() {
    var speed = 10;
    var px = 1;
    var demo2 = document.getElementById("demo2");
    var demo1 = document.getElementById("demo1");
    var demo = document.getElementById("demo");
    demo2.innerHTML = demo1.innerHTML;
    function Marquee() {
        if (demo2.offsetWidth - demo.scrollLeft <= 0) {
            demo.scrollLeft -= demo1.offsetWidth;
        }
        else {
            demo.scrollLeft+=px;
        }
    }
    var MyMar = setInterval(Marquee, speed);
    demo.onmouseover = function() { clearInterval(MyMar); }
    demo.onmouseout = function() { MyMar = setInterval(Marquee, speed); }
}