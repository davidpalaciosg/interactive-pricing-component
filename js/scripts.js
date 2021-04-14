// A $( document ).ready() block.
$( document ).ready(function() {

    let valor=2;
    $('#rangeBar').on('input', function() {
        valor = $("#rangeBar").val();

        if(valor==0)
        {
            $("#quantity").html("10K");
            $("#value").html("$8.00");
        }
        else if(valor==1)
        {
            $("#quantity").html("50K");
            $("#value").html("$12.00");
        }
        
        else if(valor==2)
        {
            $("#quantity").html("100K");
            $("#value").html("$16.00");
        }
        else if(valor==3)
        {
            $("#quantity").html("500K");
            $("#value").html("$24.00");
        }
        else if(valor==4)
        {
            $("#quantity").html("1M");
            $("#value").html("$36.00");
        }
        
      });

    

});