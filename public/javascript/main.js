$(document).ready(() => {
    getTodaysFeature();

    $('form').on('submit',function(e){
        e.preventDefault();
    
        $.ajax({
            type: 'post',
            url: $('form').attr('action'),
            data: {vin: $('#carSearch').val()},
            success: function(res){
                if(!res.invalidVin && !res.notFound){
                    $('#searchResult').html(genCarTemplate(res));
    
                }else if(!res.invalidVin && res.notFound){
                    $('#searchResult').html(`<h3>Car not found</h3> <p>The car you searched for,
                        Has not been reported stolen
                    to us. However this does not quarantee the car is not stolen. you are advised to confirm 
                    the origanality of custom and car documents if offered to you for sale..</p>`);
                }else{
                    $('#searchResult').text(res.invalidVin);
                }
        }
    });
})

function getTodaysFeature(){
    $.ajax({
        type: 'GET',
        url: '/todaysFeature',
        success:  function(res){
            let feature = res.data;
    
            $('#feature').html(`${feature.carMake} ${feature.model} with VIN ${feature.vin},${feature.color} 
            color. reported stolen at ${feature.placeStolen} ${feature.stateStolen} state on ${feature.date}.
            If you have any information regarding this car, <a href="/mail-owner/${feature.vin}">notify the owner</a>. `)
        }
    })
    
}

    function genCarTemplate(searchedCar){
        let template = `
        <div id="car">
        <div class= "guide"><h3>The vehicle you searched for is reported stolen on our database.</h3>
        <p > If you intend to buy this car, it is important you
        thoroughly check the Custom and car documents and make sure it is original. You should 
        also make sure the name on all vehicle document matches the sellers name or prove car 
        was bought from original owner.</p> 
        </div>
        <hr>
        <p id="info"> <strong>Car & Theft Info</strong> </p>

        <table class= "table table-condensed">
        <tr> <td>Car Make:</td> <td>${searchedCar.carMake}</td></tr>
        <tr> <td>Model:</td> <td >${searchedCar.model}</td></tr>
        <tr> <td>VIN:</td> <td class="info" >${searchedCar.vin}</td></tr>
        <tr> <td>Plate number:</td> <td>${searchedCar.plateNumber}</td></tr>
        <tr> <td>Color:</td> <td>${searchedCar.color}</td></tr>
        <tr> <td>Date stolen:</td> <td>${searchedCar.date}</td></tr>
        <tr> <td>State stolen:</td> <td>${searchedCar.stateStolen}</td></tr>
        <tr> <td>Place stolen:</td> <td>${searchedCar.placeStolen}</td></tr>
        
    </table>
    <hr >
    <p class= "guide">If after going through the car documents, and you have doubt the seller is the actual
    owner of the car. You may wish to report to your local <strong>Police</strong> or <a href="/mail-owner/${searchedCar.vin}">notify the owner</a> (the car registerer).
    </div>`;
    return template;
    }
});
