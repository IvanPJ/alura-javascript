var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault();

  var form = document.querySelector('#formAdiciona');

  var paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensDeErros(erros);
    return;
  }

  var pacienteTr = montaTr(paciente);

  tabela = document.querySelector('#tabela-pacientes');

  tabela.appendChild(pacienteTr);

  form.reset();
  
  document.querySelector('#mensagens-erro').innerHTML = '';

});

function exibeMensagensDeErros(erros) {
  var ul = document.querySelector('#mensagens-erro');

  ul.innerHTML = '';

  erros.forEach(function (erro) {
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  })
}

function obtemPacienteDoFormulario(form) {

  paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;

};

function montaTr(paciente) {
  var pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gorduta'));
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

  return pacienteTr;

};

function montaTd(dado, classe) {
  var td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe)

  return td;
}

function validaPaciente(paciente) {

  var error = [];

  if (paciente.nome.length == 0) error.push('O nome não pode ser nulo!');
  if (!validaPeso(paciente.peso)) error.push('Peso invalido!');
  if (paciente.gordura.length == 0) error.push('A gordura não pode ser nula');
    if (!validaAltura(paciente.altura)) error.push('Altura invalida!');

  return error;
}