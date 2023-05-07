const options = {
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, options);

const title = document.querySelectorAll('.scroll-anim__title');
const text = document.querySelectorAll('.scroll-anim__text');


for(let i = 0; i < title.length; i++) {
    observer.observe(title[i]);
    observer.observe(text[i]);
}

// Buy now button
const button = document.querySelector('.buy-now-btn');
const offset = button.offsetTop + 70;

function toggleButtonFixed() {
    if (window.pageYOffset > offset) {
        button.classList.add('fixed');
    } else {
        button.classList.remove('fixed');
    }
}

window.addEventListener('scroll', toggleButtonFixed);