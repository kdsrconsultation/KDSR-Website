/* ===================================
   KDSR CONSULTATION - script.js
=================================== */

/* -----------------------------------
   Loader
----------------------------------- */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000);
});


/* -----------------------------------
   Scroll Reveal Animation
----------------------------------- */
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* -----------------------------------
   Animated Counters
----------------------------------- */
const counters = document.querySelectorAll(".counter");

const runCounters = () => {

    counters.forEach(counter => {

        const target =
            parseInt(counter.dataset.target);

        const current =
            parseInt(counter.innerText) || 0;

        const increment =
            Math.ceil(target / 100);

        const updateCounter = () => {

            let value =
                parseInt(counter.innerText) || 0;

            if (value < target) {

                counter.innerText =
                    Math.min(
                        value + increment,
                        target
                    );

                setTimeout(updateCounter, 20);

            } else {

                if (target === 250) {
                    counter.innerText = "250+";
                }

                if (target === 97) {
                    counter.innerText = "97%";
                }

                if (target === 6) {
                    counter.innerText = "6+";
                }

            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats =
        document.querySelector(".stats");

    if (!stats) return;

    const top =
        stats.getBoundingClientRect().top;

    if (
        top < window.innerHeight - 100 &&
        !counterStarted
    ) {
        counterStarted = true;
        runCounters();
    }

});


/* -----------------------------------
   FAQ Accordion
----------------------------------- */
const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn =
        item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});


/* -----------------------------------
   Testimonials Slider
----------------------------------- */
const testimonials =
    document.querySelectorAll(
        ".testimonial-card"
    );

let testimonialIndex = 0;

function showTestimonial(index) {

    testimonials.forEach(card => {
        card.classList.remove("active");
    });

    testimonials[index].classList.add(
        "active"
    );
}

if (testimonials.length > 0) {

    setInterval(() => {

        testimonialIndex++;

        if (
            testimonialIndex >=
            testimonials.length
        ) {
            testimonialIndex = 0;
        }

        showTestimonial(testimonialIndex);

    }, 5000);

}


/* -----------------------------------
   Mobile Menu
----------------------------------- */
const menuBtn =
    document.getElementById("menu-btn");

const navLinks =
    document.getElementById("nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        if (
            navLinks.style.display === "flex"
        ) {

            navLinks.style.display = "none";

        } else {

            navLinks.style.display = "flex";
            navLinks.style.flexDirection =
                "column";

        }

    });

}


/* -----------------------------------
   Contact Form Submission
----------------------------------- */
const leadForm =
    document.getElementById("leadForm");

if (leadForm) {

    leadForm.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();

            const formData = {

                name:
                    document.getElementById(
                        "name"
                    ).value,

                phone:
                    document.getElementById(
                        "phone"
                    ).value,

                email:
                    document.getElementById(
                        "email"
                    ).value,

                message:
                    document.getElementById(
                        "message"
                    ).value

            };

            try {

                if (
                    typeof CRM_CONFIG !==
                        "undefined" &&
                    CRM_CONFIG.googleScriptURL &&
                    !CRM_CONFIG.googleScriptURL.includes(
                        "PASTE_YOUR"
                    )
                ) {

                    await fetch(
                        CRM_CONFIG.googleScriptURL,
                        {
                            method: "POST",
                            mode: "no-cors",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body: JSON.stringify(
                                formData
                            )
                        }
                    );

                }

                /* Show Success Modal */
                const modal =
                    document.getElementById(
                        "successModal"
                    );

                if (modal) {
                    modal.style.display =
                        "flex";
                }

                /* Open WhatsApp */
                const message =
                    `Hello KDSR Consultation.%0A%0A` +
                    `Name: ${formData.name}%0A` +
                    `Phone: ${formData.phone}%0A` +
                    `Query: ${formData.message}`;

                window.open(
                    `https://wa.me/917973666876?text=${message}`,
                    "_blank"
                );

                leadForm.reset();

            } catch (err) {

                alert(
                    "Submission failed. Please try again."
                );

                console.error(err);

            }

        }
    );

}


/* -----------------------------------
   Close Success Modal
----------------------------------- */
const closeModal =
    document.getElementById(
        "closeModal"
    );

if (closeModal) {

    closeModal.addEventListener(
        "click",
        () => {

            document.getElementById(
                "successModal"
            ).style.display = "none";

        }
    );

}


/* -----------------------------------
   Smooth Navigation
----------------------------------- */
document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute(
                            "href"
                        )
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });