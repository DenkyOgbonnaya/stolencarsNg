$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        $('#mailStatus').text('Sending mail...')
        $.ajax({
            type: 'POST',
            url: $('form').attr('action'),
            data: $('form').serialize(),
            success: function(res){
                setTimeout(()=>{
                    $('#mailStatus').text(res.sent);
                }, 5000);
                    
                
                
            },
            error: ()=>{
                $('#mailStatus').text('cant connect to server');
            }

        })
    })
})