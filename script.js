document.addEventListener("DOMContentLoaded", () => {
    const filterItem = document.querySelector(".items");
    const filterImg = document.querySelectorAll(".images");
    const gallery = document.querySelector(".gallery");
    filterItem.addEventListener("click", (event) => {
        if (event.target.classList.contains("item")) {

            filterItem.querySelectorAll(".item").forEach((button) => {
                button.classList.remove("active");
                button.classList.add("inactive");
            });

            event.target.classList.remove("inactive");
            event.target.classList.add("active");

            const filterName = event.target.getAttribute("data-name");

            filterImg.forEach((image) => {
                const filterImages = image.getAttribute("data-name");
                if (filterName === "all" || filterImages === filterName) {
                    image.classList.remove("hide");
                } else {
                    image.classList.add("hide");
                }
            });
            if (["html/css/js", "tailwind css", "react"].includes(filterName)) {
                gallery.classList.add("display-block"); // Add class for block display
            } else {
                gallery.classList.remove("display-block"); // Remove class for block display
            }
        }
    });
});


function randomText(){
    var text = ("abcdefghijklmnopqrstuvwxyz0123456789");
    letter = text[Math.floor(Math.random()*text.length)];
    return letter;
}

function rain(){
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 300);
    let size = Math.random() * 1.5;
    e.classList.add('text');
    cloud.appendChild(e);
    e.innerText = randomText()
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    
    setTimeout(function(){
      cloud.removeChild(e);
    }, 2000)
  }
  
  setInterval(function(){
    rain()
  }, 20);