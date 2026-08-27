// Replace these placeholders with your actual Stripe Payment Links.
const STRIPE_LINKS = {
  premium: 'https://buy.stripe.com/bJebJ2bcY2V539HcjIf3a07',
  social: 'https://buy.stripe.com/5kQ9AU6WIanxdOl2J8f3a08',
  website: 'https://buy.stripe.com/aFabJ2ftecvF25DbfEf3a09'
};

document.getElementById('year').textContent = new Date().getFullYear();

const modal = document.getElementById('stripeModal');
const modalPackage = document.getElementById('modalPackage');

function openPlaceholder(label){
  modalPackage.textContent = label;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

document.querySelectorAll('.stripe-placeholder').forEach((button) => {
  button.addEventListener('click', () => {
    const plan = button.dataset.plan || 'premium';
    const url = STRIPE_LINKS[plan];
    if (url) window.location.href = url;
    else openPlaceholder(button.dataset.package);
  });
});

document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
