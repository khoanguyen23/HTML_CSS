window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var header = document.querySelector(".header");
    var stickyClass = "sticky";
  
    if (window.scrollY > header.offsetHeight) {
      header.classList.add(stickyClass);
    } else {
      header.classList.remove(stickyClass);
    }
  });

  

  