const btn = document.querySelector('.btn');
const cardsSection = document.querySelector('.cards-section')

function scrollToCards() {
  cardsSection.scrollIntoView({block: "start", behavior: "smooth"});
}

btn.addEventListener('click', scrollToCards);

const cards = document.querySelectorAll('[data-card]');
const topics = document.querySelectorAll('[data-topic]');

for (let i = 0; i < cards.length; i += 1) {
    cards[i].addEventListener('click', () => topics[i].scrollIntoView({block: "start", behavior: "smooth"}));
};
