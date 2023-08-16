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
