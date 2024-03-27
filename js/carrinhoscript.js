function buscarEndereco() {
    event.preventDefault()
    let cep = document.getElementById('cepInput').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let endereco = document.getElementById('endereco');
  
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.erro) {
            endereco.innerText = "CEP não encontrado.";
        } else {
            let endereco = `CEP: ${data.cep}\n ${data.logradouro}\n\n Bairro: ${data.bairro}\n ${data.localidade} ${data.uf}`;
            document.getElementById('endereco').innerText = endereco;
            document.getElementById('endereco').style.display = "flex";
        }
    })
    .catch(error => console.error('Erro:', error));
}

// Função para exibir os itens do carrinho na página do carrinho
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const cartList = document.getElementById('cart');

  // Limpa o conteúdo atual do carrinho
  cartList.innerHTML = '';

  // Verifica se há itens no carrinho
  if (cart && cart.length > 0) {
    // Loop através de cada item do carrinho e adiciona à lista
    cart.forEach(item => {
      const cartItem = document.createElement('li');

      const itemImage = document.createElement('img');
      itemImage.src = item.image;
      itemImage.alt = item.name;
      cartItem.appendChild(itemImage);

      const itemName = document.createElement('p');
      itemName.textContent = item.name;
      cartItem.appendChild(itemName);

      const itemPrice = document.createElement('p');
      itemPrice.textContent = item.price;
      cartItem.appendChild(itemPrice);

      cartList.appendChild(cartItem);
    });
  } else {
    // Se o carrinho estiver vazio, exibe uma mensagem
    cartList.innerHTML = '<h1>Carrinho vazio</h1>';
    cartList.style.fontFamily = 'Inter, sans-serif'
  }
}

// Chama a função para exibir os itens do carrinho ao carregar a página
window.onload = displayCart;