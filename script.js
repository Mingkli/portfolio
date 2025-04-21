window.addEventListener('scroll', function() {
    var welcome = document.querySelector('.welcome');
    var newHeight = Math.max(50, 100 - window.pageYOffset / 10);
    welcome.style.height = newHeight + 'vh';
  });

// Toggles the navigation menu open and closed
function toggleNav() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show-menu");
}

// The page scroll animation 
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    });
  
    document.querySelectorAll('.scroll-animate').forEach(section => {
      observer.observe(section);
    });
});
  
// The style of the navigation meanu cursor
document.addEventListener('DOMContentLoaded', function () {
    let cursor = document.querySelector('#cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.top = e.pageY + 'px';
        cursor.style.left = e.pageX + 'px';
    });
  });



// Rotate needle on hover
function rotateNeedle(degrees) {
  const needle = document.getElementById('needle');
  needle.style.transform = `translate(-50%, -90%) rotate(${degrees}deg)`;
}


  function toggleMenu() {
    const nav = document.querySelector('.nav-menu');
    const music = document.querySelector('.music');

    nav.classList.toggle('show-menu');
    music.classList.toggle('show-music');
  }






  
 