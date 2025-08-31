// === Portfolio Filtering === //
document.addEventListener("DOMContentLoaded", function () {
    
    // Portfolio Filtering
    const filterBtns = document.querySelectorAll(".filter-btn");
    const subFilter = document.querySelector(".videography-subfilter");
    const subFilterBtns = document.querySelectorAll(".sub-filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const modal = document.querySelector(".portfolio-modal");
    const modalClose = document.querySelector(".modal-close");
    const modalBody = document.querySelector(".modal-body");
    const videoThumbnails = document.querySelectorAll(".video-thumbnail");

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
    
    // Video Modal Functionality
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const videoUrl = this.querySelector(".video-data").getAttribute("data-video-url");
            modalBody.innerHTML = `<iframe width="100%" height="500" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
        });
    });
    
    // Close modal
    modalClose.addEventListener("click", function() {
        closeModal();
    });
    
    // Close modal when clicking outside
    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal function
    function closeModal() {
        modal.style.display = "none";
        modalBody.innerHTML = ""; // Clear iframe to stop video
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }
});
