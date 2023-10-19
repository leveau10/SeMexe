
      document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll("a");
        const container = document.querySelector(".page-transition");
    
        // Add a click event listener to all links in the document
        links.forEach((link) => {
          link.addEventListener("click", function (event) {
            event.preventDefault();
    
            // Add the slide-out class to the container
            container.classList.add("slide-out");
    
            // Wait for the slide-out animation to complete
            setTimeout(() => {
              // Navigate to the new page after the animation
              window.location.href = link.getAttribute("href");
            }, 500); // Set the timeout to match the animation duration (0.5s)
          });
        });
    
        // When a new page is loaded, remove the slide-out class to trigger the slide-in animation
        window.addEventListener("load", function () {
          container.classList.remove("slide-out");
        });
      });
  