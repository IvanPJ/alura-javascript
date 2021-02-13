var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault();

  var form = document.querySelector('#formAdiciona');

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement('tr');

  var nomeTd = document.createElement('td');
  var pesoTd = document.createElement('td');
  var alturaTd = document.createElement('td');
  var gorduraTd = document.createElement('td');
  var imcTd = document.createElement('td');

  pacienteTr.classList.add('paciente');

  nomeTd.classList.add('info-nome');
  pesoTd.classList.add('info-peso');
  alturaTd.classList.add('info-altura');
  gorduraTd.classList.add('info-gordura');
  imcTd.classList.add('info-imc');

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = imc;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  tabela = document.querySelector('#tabela-pacientes');

  tabela.appendChild(pacienteTr);

});