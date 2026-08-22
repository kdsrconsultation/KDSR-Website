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
