var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "inline";
  setTimeout(carousel, 4000);
}

function addToCart(event) {
  
  const product = event.target.parentNode.parentNode;
  alert(event.target.parentNode.parentNode.nodeName);
  const productName = product.querySelector('h2').innerText;
  const productImage = product.querySelector('img').src;
  const productPrice = product.querySelector('p:nth-child(3)').innerText;

  // Cria um objeto para representar o produto
  const productData = {
    name: productName,
    image: productImage,
    price: productPrice
  };

  // Obtém o carrinho atual do armazenamento local ou cria um novo array vazio
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Adiciona o produto ao carrinho
  cart.push(productData);

  // Salva o carrinho atualizado de volta no armazenamento local
  localStorage.setItem('cart', JSON.stringify(cart));
}

const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});