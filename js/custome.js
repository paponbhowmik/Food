// header scroll st
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
// header scroll end
// venobox st
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
// venobox end

// preloader js st
var loder = document.getElementById("preloder");
window.addEventListener("load", function(){
    loder.style.display = "none"
    $("#preloder").delay(6000).fadeOut("slow");
})
// preloader js end