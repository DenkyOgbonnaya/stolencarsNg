$(document).ready( function(){
    let hasInputs = true;
    loadReviews();

    $(':submit').click(function(e) {
        $(':input').each(function() {
        if ($(this).val().length == 0) {
        $(this).css('border', '2px solid red');
        hasInputs=false;
        }
        });
        if(hasInputs){
            $.ajax({
                type: 'POST',
                url: $('form').attr("action"),
                data: $('form').serialize(),
                success: function(result){
                    let newReview = `<div class ="reviews">
                    <h5>${result.name} | ${result.time}</h5>
                    <p>${result.comment}</P>
                    </div><hr>`

                    $('.comments').append(newReview);
                    $("html, body").animate({
                        scrollTop: $(document).height()},1000);

                }
                
            });
        }
        hasInputs= true;

        e.preventDefault();
        });

    function loadReviews(){
        $.ajax({
            type:'GET',
            url: $('form').attr('action'),
            success: function(reviews){
                for(let index = 0; index <= reviews.length; index++){
                    let theReview = `<div class ="reviews">
                    <h5>${reviews[index].name} | ${reviews[index].time}</h5>
                    <p>${reviews[index].comment}</P>
                    </div><hr>`
                    $('.comments').append(theReview);

                }
            }
        });
    }

});