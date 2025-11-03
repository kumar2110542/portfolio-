
function reveal() {
  // === Reveal sections that slide up ===
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

  // === Handle fade-in-left and fade-in-right ===
  const fades = document.querySelectorAll(".fade-in-left, .fade-in-right");
  for (let i = 0; i < fades.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = fades[i].getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      fades[i].classList.add("active");
    } else {
      fades[i].classList.remove("active");
    }
  }
}

// Trigger animations on scroll and initial load
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
