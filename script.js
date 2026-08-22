/* =========================================================
   KDSR CONSULTATION
   MAIN JAVASCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       1. MOBILE NAVIGATION
    ===================================================== */

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");


    if (mobileMenuBtn && mobileNav) {

        mobileMenuBtn.addEventListener("click", function () {

            mobileNav.classList.toggle("open");

            const isOpen = mobileNav.classList.contains("open");

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Close mobile menu after clicking a link */

        const mobileLinks = mobileNav.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileNav.classList.remove("open");

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       2. STICKY HEADER SHADOW
    ===================================================== */

    const siteHeader = document.getElementById("siteHeader");


    function handleHeaderScroll() {

        if (!siteHeader) return;


        if (window.scrollY > 20) {

            siteHeader.classList.add("scrolled");

        } else {

            siteHeader.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        handleHeaderScroll
    );

    handleHeaderScroll();



    /* =====================================================
       3. BACK TO TOP BUTTON
    ===================================================== */

    const backToTop = document.getElementById("backToTop");


    function handleBackToTop() {

        if (!backToTop) return;


        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        handleBackToTop
    );

    handleBackToTop();


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



    /* =====================================================
       4. AUTOMATIC CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       5. CLOSE MOBILE MENU ON WINDOW RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 850 &&
                mobileNav &&
                mobileMenuBtn
            ) {

                mobileNav.classList.remove("open");

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

/* =====================================================
   FAQ ACCORDION - ALL SERVICE PAGES
===================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {

    const question = item.querySelector(".faq-question");

    if (question) {

        question.addEventListener("click", function () {

            const isActive = item.classList.contains("active");

            /* Close all FAQ items */

            faqItems.forEach(function (faq) {

                faq.classList.remove("active");

            });


            /* Open clicked FAQ item */

            if (!isActive) {

                item.classList.add("active");

            }

        });

    }

});
