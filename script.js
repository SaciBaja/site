const targetDate = new Date("October 14, 2026 00:00:00").getTime(); // data da competição

const updateCountdown = () => {
    const daysElement = document.getElementById("days");
    
    // Só executa o código do cronômetro se o elemento existir na página atual
    if (!daysElement) return;

    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysElement.innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (difference < 0) {
        clearInterval(interval);
        const countdownContainer = document.querySelector(".countdown-container");
        if (countdownContainer) {
            countdownContainer.innerHTML = "<h1>Competição rolando!</h1>";
        }
    }
};

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// menu no celular
var navLinks = document.getElementById("navLinks");
function showMenu() {
    if (navLinks) navLinks.style.right = "0";
}
function hideMenu() {
    if (navLinks) navLinks.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                return;
            }
            entry.target.classList.remove('in-view');
        });
    });
    
    const allAnimatedElements = document.querySelectorAll('.animate');
    allAnimatedElements.forEach((element) => observer.observe(element));
});

document.addEventListener('click', function(e) {
  // Usar o closest() é uma boa prática. Garante que se você colocar um ícone dentro do botão no futuro, o clique ainda funcione perfeitamente.
  const btn = e.target.closest('.read-more');
  
  if (btn) {
    e.stopPropagation(); 

    const title = btn.parentElement;
    title.classList.toggle('expanded');

    if (title.classList.contains('expanded')) {
      btn.textContent = 'Leia menos';
    } else {
      btn.textContent = 'Leia mais';
    }
  }
});