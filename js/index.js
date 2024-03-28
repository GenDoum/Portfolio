const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    cosole.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
        entry.target.classList.remove('show');
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

const header = document.querySelector('.navbar');

function checkIfSticky() {
  const fromTop = window.scrollY;
  const headerHeight = header.offsetHeight;

  if (fromTop >= headerHeight) {
    header.classList.add('is-sticky');
  } else {
    header.classList.remove('is-sticky');
  }
}


window.addEventListener('scroll', checkIfSticky);

