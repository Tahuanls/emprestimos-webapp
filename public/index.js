$(document).ready(function(){
    $('#eu').click(function(){
        // POST 
        $.ajax({
            type: "POST",
            url: '/chaves',
            data: {nome: 'thauan'},
            success: function(data){
                console.log(data)
                //location.reload()
            }
          });
    })
  });