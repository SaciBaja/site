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

    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // Exibe 1 card por vez no celular
        spaceBetween: 30, // Espaço entre os cards
        loop: true, // Faz o slider rodar infinitamente
        
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
});

document.addEventListener('click', function(e) {
  const btn = e.target.closest('.read-more');
  if (btn) {
    e.stopPropagation(); 

    const title = btn.parentElement;
    // Encontra o elemento principal do card
    const card = btn.closest('.cardEx'); 

    // Alterna a classe no título e no card
    title.classList.toggle('expanded');
    card.classList.toggle('aberto'); 

    if (title.classList.contains('expanded')) {
      btn.textContent = 'Leia menos';
    } else {
      btn.textContent = 'Leia mais';
    }
  }
});

function filterTeam(year, buttonElement) {
    // 1. Atualizar a classe 'active' nos botões
    const buttons = document.querySelectorAll('.year-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    // 2. Filtrar os cards de membros
    const cards = document.querySelectorAll('.subsist-time .card');
    
    cards.forEach(card => {
        const memberYears = card.getAttribute('data-year');
        
        // Verifica se o ano selecionado está na lista de anos do membro
        if (memberYears && memberYears.includes(year)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // 3. Esconder subsistemas vazios no ano selecionado (Opcional, mas estético)
    const sections = document.querySelectorAll('section.subsist-time');
    sections.forEach(section => {
        const visibleCards = section.querySelectorAll('.card[style*="display: block"]');
        if (visibleCards.length === 0) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}

// Executar a filtragem no ano padrão (2025) assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
    const defaultBtn = document.querySelector('.year-btn.active');
    if (defaultBtn) {
        filterTeam('2025', defaultBtn);
    }
});

var swiper = new Swiper(".mySwiper", { // ou a sua classe do swiper
    slidesPerView: 1, /* Força mostrar APENAS 1 card por vez */
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);