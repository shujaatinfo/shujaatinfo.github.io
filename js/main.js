// === Portfolio Filtering === //
document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const subFilter = document.querySelector(".videography-subfilter");
    const subFilterBtns = document.querySelectorAll(".sub-filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    // Main filter buttons
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            // Remove active class from all main filter buttons
            filterBtns.forEach((b) => b.classList.remove("active"));
            this.classList.add("active");

            if (filter === "videography") {
                subFilter.style.display = "block";
                showItems("videography"); // show all videography items
            } else {
                subFilter.style.display = "none";
                showItems(filter);
            }
        });
    });

    // Sub-filter buttons
    subFilterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            // Active state
            subFilterBtns.forEach((b) => b.classList.remove("active"));
            this.classList.add("active");

            showItems(filter);
        });
    });

    // Show/Hide items function
    function showItems(filter) {
        portfolioItems.forEach((item) => {
            if (filter === "all") {
                item.style.display = "block";
            } else if (item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
});
