$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: '/decodeVin',
            data: $('form').serialize(),
            success: function(data){
                if(!data.badVin){
                    $('.decodeAnim').css('display', 'block' )
                    setTimeout(() =>{
                        $('.decodeAnim').css('display', 'none' )
    
                        $('#vinInfo').html(`<br ><table class= "table table-condensed table table-striped">
                    <tr> <td>Car Make:</td> <td>${data.manufacturer}</td></tr>
                    <tr> <td>Model Year:</td> <td>${data.modelYear}</td></tr>
                    <tr> <td>Body/Style:</td> <td >${data.bodyStyle}</td></tr>
                    <tr> <td>Engine:</td> <td>${data.engine}</td></tr>
                    <tr> <td>made in:</td> <td>${data.madeIn}</td></tr>
                    
                </table>`)
                    }, 5000)
                    
                }else $('#vinInfo').text(data.badVin);
    
            }
        })

    })
    
})