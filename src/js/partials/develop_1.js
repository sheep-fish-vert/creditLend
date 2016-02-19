try{

    function offerButtonClick(){
        $('.offer-form-button').click(function(){

            var parent = $(this).parents('.offer-form-row');
            parent.find('.offer-form-checkbox input').click();

        });
    };

    $(document).ready(function(){

        offerButtonClick();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}