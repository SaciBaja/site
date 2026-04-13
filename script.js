const targetDate = new Date("Março 25, 2026 00:00:00").getTime(); //data da competição

const updateCountdown = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (difference < 0) {
        clearInterval(interval);
        document.querySelector(".countdown-container").innerHTML = "<h1>Competição rolando!</h1>";
    }
};
const interval = setInterval(updateCountdown, 1000);
updateCountdown();

//  menu no celular
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

window.addEventListener('scroll', () => {
  const section = document.querySelector('.section-timeline');
  const bar = document.querySelector('.timeline_progress-bar');

  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  const sectionBottom = sectionTop + section.offsetHeight;
  const scrollMid = window.scrollY + window.innerHeight * 0.5;

  if (scrollMid >= sectionBottom) {
    // Passou da timeline: trava a barra no fim
    bar.style.position = 'absolute';
    bar.style.top = '0';
    bar.style.bottom = '0';
    bar.style.height = 'auto';
    bar.style.inset = 'unset';
  } else {
    // Ainda dentro da timeline: comportamento normal
    bar.style.position = 'fixed';
    bar.style.height = '50vh';
    bar.style.top = '';
    bar.style.bottom = '';
    bar.style.inset = '0 auto 50vh';
  }
});