// Modern mobile menu toggler
function mobileMenuInit() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuClose = document.getElementById("menu-close");
  const mobileOverlay = document.getElementById("mobile-overlay");
  
  function openMenu() {
    if (!mobileMenu) return;
    
    mobileMenu.classList.remove(
      "-translate-x-full",
      "opacity-0",
      "pointer-events-none"
    );
    mobileMenu.classList.add(
      "translate-x-0",
      "opacity-100",
      "pointer-events-auto"
    );
    
    if (mobileOverlay) {
      mobileOverlay.classList.remove("opacity-0", "pointer-events-none");
      mobileOverlay.classList.add("opacity-100", "pointer-events-auto");
    }
    
    document.body.style.overflow = "hidden";
  }
  
  function closeMenu() {
    if (!mobileMenu) return;
    
    mobileMenu.classList.add(
      "-translate-x-full",
      "opacity-0",
      "pointer-events-none"
    );
    mobileMenu.classList.remove(
      "translate-x-0",
      "opacity-100",
      "pointer-events-auto"
    );
    
    if (mobileOverlay) {
      mobileOverlay.classList.add("opacity-0", "pointer-events-none");
      mobileOverlay.classList.remove("opacity-100", "pointer-events-auto");
    }
    
    document.body.style.overflow = "";
  }
  
  // Event listeners with null checks
  if (menuToggle) {
    menuToggle.addEventListener("click", openMenu);
  }
  
  if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
  }
  
  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMenu);
  }
  
  // Close menu when pressing Escape key
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
  
  // Close menu when clicking on menu items
  if (mobileMenu) {
    const menuItems = mobileMenu.querySelectorAll("a");
    menuItems.forEach(item => {
      item.addEventListener("click", closeMenu);
    });
  }
}

// Initialize mobile menu
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mobileMenuInit);
} else {
  mobileMenuInit();
}

// Hide preloader when page is loaded
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500);
  }
});

// Add loading states for images
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("img");
  
  images.forEach(img => {
    img.addEventListener("load", function() {
      this.style.opacity = "1";
    });
    
    img.addEventListener("error", function() {
      this.style.opacity = "0.5";
      console.warn("Failed to load image:", this.src);
    });
    
    // Set initial opacity for loading state
    img.style.opacity = "0";
    img.style.transition = "opacity 0.3s ease-in-out";
  });
});

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const header = document.querySelector("header");
      
      if (targetElement && header) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});
