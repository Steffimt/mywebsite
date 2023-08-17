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

function sendEmail(){
    Email.send({
        SecureToken: "57cdeb3e-ff4a-4d3e-aed9-2e5816667034",
        To : 'steffimariatanasia@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form inquiry",
        Body : "Name: " + document.getElementById("name").value + "<br> Email: </br>" + document.getElementById("email").value + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Successfully Sent!")
    );
}