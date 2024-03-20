// Change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
});


// show/hide faq answer


const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");
        faq.classList.toggle('faqheight')

        // change icon
        const icon = faq.querySelector(".faq__icon i");
        if (icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus";
        }
    });
});



// show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
})


// // JavaScript functions to handle modal
// function openModal(imageSrc) {
//     var modal = document.getElementById("myModal");
//     var modalImg = document.getElementById("modalImage");
//     modal.style.display = "block";
//     modalImg.src = imageSrc;
// }

// function closeModal() {
//     var modal = document.getElementById("myModal");
//     modal.style.display = "none";
// }

// // Prevent event propagation when clicking on the modal content
// document.getElementById("myModal").addEventListener("click", function (event) {
//     if (event.target === this) {
//         closeModal();
//     }
// });