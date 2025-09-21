// === Portfolio Filtering === //
document.addEventListener("DOMContentLoaded", function () {
    
    // Portfolio Filtering
    const filterBtns = document.querySelectorAll(".filter-btn");
    const subFilter = document.querySelector(".videography-subfilter");
    const subFilterBtns = document.querySelectorAll(".sub-filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const modal = document.querySelector(".shj-portfolio-modal");
    const modalClose = document.querySelector(".shj-modal-close");
    const modalBody = document.querySelector(".shj-modal-body");
    const videoThumbnails = document.querySelectorAll(".video-thumbnail");
    const photoThumbnails = document.querySelectorAll(".photo-thumbnail");

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
            const videoUrl = this.getAttribute("data-video-url");
            // Add autoplay=1 parameter to the URL
            const autoplayUrl = videoUrl.includes('?') ? 
                `${videoUrl}&autoplay=1` : 
                `${videoUrl}?autoplay=1`;
            
            modalBody.innerHTML = `<iframe width="100%" height="500" src="${autoplayUrl}" frameborder="0" allowfullscreen allow="autoplay"></iframe>`;
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
        });
    });
    
    // Photo Modal Functionality
    photoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const imgSrc = this.getAttribute("data-img-src");
            const imgAlt = this.querySelector("img").getAttribute("alt") || "Image";
            
            modalBody.innerHTML = `
                <div class="shj-image-container">
                    <img src="${imgSrc}" alt="${imgAlt}" class="shj-modal-image">
                    <div class="shj-zoom-controls">
                        <button class="shj-zoom-in"><i class="fa fa-search-plus"></i></button>
                        <button class="shj-zoom-out"><i class="fa fa-search-minus"></i></button>
                        <button class="shj-zoom-reset"><i class="fa fa-refresh"></i></button>
                    </div>
                </div>
            `;
            
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
            
            // Zoom functionality
            let scale = 1;
            const image = document.querySelector('.shj-modal-image');
            const zoomIn = document.querySelector('.shj-zoom-in');
            const zoomOut = document.querySelector('.shj-zoom-out');
            const zoomReset = document.querySelector('.shj-zoom-reset');
            
            zoomIn.addEventListener('click', function() {
                scale += 0.1;
                image.style.transform = `scale(${scale})`;
            });
            
            zoomOut.addEventListener('click', function() {
                if (scale > 0.5) {
                    scale -= 0.1;
                    image.style.transform = `scale(${scale})`;
                }
            });
            
            zoomReset.addEventListener('click', function() {
                scale = 1;
                image.style.transform = `scale(${scale})`;
                image.style.transition = 'transform 0.3s ease';
            });
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
    
    // Close modal with Escape key
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && modal.style.display === "flex") {
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


document.addEventListener("DOMContentLoaded", function () {
    // Graphic Designing wale button ko default click kar do
    document.querySelector('.filter-btn[data-filter="design"]').click();
});


// === Mobile Menu Toggle === //
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li a');

    if (menuToggle && navMenu) {
        // Toggle open/close on menu button
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
            });
        });
    }
});







