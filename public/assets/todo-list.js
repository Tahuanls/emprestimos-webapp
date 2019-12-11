$(document).ready(function(){

  $('form').on('submit', function(){

      var chave = $('#input_chave').val();
      var nome = $('#input_nome').val()
      var turma = $('#input_turma').val()
      var todo = {chave: chave, nome: nome, turma: turma}

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('.unique-todo').on('click', function(){
      //var item = $(this).text().replace(/ /g, "-");
      var chave = $(this).find('.chave').text();
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + chave,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
