document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello frontend !');
  console.log(document.cookie);
  const btn = document.querySelector('.js-panierBtn'); // On récupère le bouton
  btn.addEventListener('click', () => { // On écoute le clic sur le bouton
    const panier = [{productId: 1, quantity: 12}, {productId: 2, quantity: 2}]; // On récupère le panier
    
    document.cookie = `panier=${JSON.stringify(panier)}`; // On stocke le panier dans un cookie
    document.cookie = `panierId=156`; // On stocke le panier dans un cookie
    // On envoie une requête au backend
    fetch('/panier'); // On envoie une requête au backend
  });
});
