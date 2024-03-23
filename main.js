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


document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }

        // Close other open accordion items
        document.querySelectorAll('.accordion-header').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
});


window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var goToTopButton = document.getElementById("goto-top");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopButton.style.display = "flex";
        } else {
            goToTopButton.style.display = "none";
        }
    }


    function scrollToTop() {
        // document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    // Add click event listener to the "Go to Top" button
    document.getElementById("goto-top").addEventListener("click", scrollToTop);


    function validatePhoneNumber() {
        var phoneNumber = document.getElementById("phone").value;
        var phoneNumberPattern = /^\d{10}$/; // Regular expression for 10-digit phone number

        if (phoneNumberPattern.test(phoneNumber)) {
            // Phone number is valid
            return true;
        } else {
            // Phone number is invalid
            alert("Please enter a valid 10-digit phone number.");
            return false;
        }
    }


    

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


