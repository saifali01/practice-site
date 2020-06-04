function myfunction1(){
$('.form-group').on('input','.prc1',function(){
        var totalsum=0;
        $('.form-group .prc1').each(function(){
          var inputval=$(this).val();
          if($.isNumeric(inputval)){
            totalsum+=parseFloat(inputval);
          }
        });
$('#result1').text(totalsum);
      });

}

document.getElementById('result1').innerHTML = myfunction1();


        function myfunction2(){

              $('.form-group').on('input','.prc2',function(){
                      var totalsum=0;
                      $('.form-group .prc2').each(function(){
                        var inputval=$(this).val();
                        if($.isNumeric(inputval)){
                          totalsum+=parseFloat(inputval);
                        }
                      });
              $('#result2').text(totalsum);
                    });
        }
      document.getElementById('result2').innerHTML = myfunction2();
