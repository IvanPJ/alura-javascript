var botao = document.querySelector('#buscar-paciente');

botao.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

  xhr.addEventListener('load', function () {

    if (xhr.status == 200) {
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function (paciente) {
        adicionarPacienteNaTabela(paciente)
      });
    } else {
      alert('Erro ao buscar os pacientes');
      console.log(xhr.status, xhr.responseText);
    }
  });

  xhr.send();

});