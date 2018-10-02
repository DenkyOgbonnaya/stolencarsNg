$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        let vin =  $('#vin').val();
        let email =  $('#email').val();
        $.ajax({
            type: 'DELETE',
            url: `${$('form').attr('action')}?vin=${vin}&email=${email}`,
            success: function(res){
                $('#responds').text(res.removed);
            }
        })
    })
})