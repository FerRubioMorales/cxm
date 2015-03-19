/**
 * Created by fer on 18/03/2015.
 */
$(document).ready(function(){

    $("#save").on("click",function(event){

        var notify = $.notify('<strong>Saving</strong> Do not close this page...', {
            icon: 'glyphicon glyphicon-time',
            allow_dismiss: true,
            timer: 500
        });

        if(event)
            event.preventDefault();


        var url = "/categories/create";

        $.ajax({
            type: "POST",
            url: url,
            data: $("form").serialize(), // serializes the form's elements.
            success: function(data)
            {
                notify.update('type', 'success');
                notify.update('message', '<strong>Success</strong> Your category has been saved!');
                notify.update('icon', 'glyphicon glyphicon-ok');
                setTimeout(function() {
                    notify.close();
                }, 5000);
            },
            error: function(err){
                notify.update('type', 'danger');
                notify.update('message', '<strong>Woops</strong> Something went wrong!');
                notify.update('icon', 'glyphicon glyphicon-remove');
                setTimeout(function() {
                    notify.close();
                }, 5000);
            }
        });


    });

});