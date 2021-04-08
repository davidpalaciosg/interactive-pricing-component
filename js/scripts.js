// A $( document ).ready() block.
$( document ).ready(function() {

    let valor=2;
    $('#rangeBar').on('input', function() {
        valor = $("#rangeBar").val();

        if(valor==0)
        {
            $("#quantity").html("10K");
            $("#value").html("8");
        }
        else if(valor==1)
        {
            $("#quantity").html("50K");
            $("#value").html("12");
        }
        
        else if(valor==2)
        {
            $("#quantity").html("100K");
            $("#value").html("16");
        }
        else if(valor==3)
        {
            $("#quantity").html("500K");
            $("#value").html("24");
        }
        else if(valor==4)
        {
            $("#quantity").html("1M");
            $("#value").html("36");
        }
        
      });

    

});