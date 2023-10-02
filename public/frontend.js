document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello frontend !');
  const btn = document.querySelector('.js-panierBtn');
  btn.addEventListener('click', () => {

    // On envoie une requête au backend
    fetch('/panier');
  });
});
