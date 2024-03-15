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