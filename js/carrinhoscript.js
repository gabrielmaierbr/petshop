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

let valor1 = document.getElementById("valor1").innerText;
let valor2 = document.getElementById("valor2").innerText;

valor1 = parseFloat(valor1.replace(',', '.'));
valor2 = parseFloat(valor2.replace(',', '.'));

let valorTotal = valor1 + valor2;

let valorTotalFormatado = valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

let subtotal = document.getElementById("subtotal");
subtotal.innerText = `Total a pagar: R$${valorTotalFormatado}`;
