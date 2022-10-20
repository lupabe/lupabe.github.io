const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".menu");
const navFabars = document.querySelector(".fabars");


const hideMenu = () => {
  navMenu.classList.toggle("visible");
  document.body.classList.toggle("stop-scrolling");
  navFabars.classList.toggle("rotate");
};

navToggle.addEventListener("click", () => {
  hideMenu();
});

window.addEventListener("scroll", function(){

	var header = document.querySelector("header");
	header.classList.toggle("down",window.scrollY>0);
});


/*product*/

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}

/*Button-up*/

buttonUp = document.getElementById("button-up");
openUp = document.getElementById("open");
window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

    if (scroll > 500){
        openUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        openUp.style.transform = "scale(0)";
    }
}
