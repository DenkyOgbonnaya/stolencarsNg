$(document).ready(function(){

    let errorMessage ='';
    $('#error').hide();
    $('form').on('submit',function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: $('form').attr("action"),
            data: $('form').serialize(),
            success: function(res){
                if(!res.errorMessage){
                    $('#regForm').html(genCarTemplate(res.car));
                }else{
                    for(let index=0; index<= res.errorMessage.length; index++){
                        errorMessage+= `*${res.errorMessage[index]}<br />`;
                    }
                    $('#error').text('');
                    $('#error').html(errorMessage);
                    $('#error').fadeIn('slow');
                    errorMessage = '';
                }
            }
           
        });
        
        });
    function genCarTemplate(car){
        let template = `<h3>Your ${car.carMake} is successfully registered!  </h3>
        <div id="car">
        <p><img id="stolenCar" src="./public/images/stolencars/carStolen.jpeg" alt=""></p>
        <hr>
        <p id="info"> <strong>Car Info</strong> </p>
        <table class= "table table-condensed">
        <tr> <td>Car Make:</td> <td>${car.carMake}</td></tr>
        <tr> <td>Model:</td> <td >${car.model}</td></tr>
        <tr> <td>VIN:</td> <td class="info" >${car.vin}</td></tr>
        <tr> <td>Plate number:</td> <td>${car.plateNumber}</td></tr>
        <tr> <td>Color:</td> <td>${car.color}</td></tr>
        <tr> <td>Date stolen:</td> <td>${car.date}</td></tr>
        <tr> <td>State stolen:</td> <td>${car.stateStolen}</td></tr>
        <tr> <td>Place stolen:</td> <td>${car.placeStolen}</td></tr>
        
    </table>
    </div>
        <p>You will be swifly contacted when your car comes up!.</p>`;
    return template;
    }

});