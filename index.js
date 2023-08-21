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

  

// window.addEventListener("scroll", function() {
//     var navbar = document.querySelector(".navbar");
//     var stickyClass = "sticky";
  
//     if (window.scrollY > 0) { // Nếu scrollY > 0, thì thêm lớp "sticky" vào navbar
//       navbar.classList.add(stickyClass);
//     } else {
//       navbar.classList.remove(stickyClass);
//     }
//   });
  