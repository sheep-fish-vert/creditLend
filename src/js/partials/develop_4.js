try{
    function regionSelection(){
        $('.region-button').click(function() {
             $( "#region" ).selectmenu('open');
        });
        $( "#region" ).selectmenu();
    }
    function sliderRange(){

        function numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        $('.slider-credit').each(function() {
            var max = $(this).data('max'),
                min = $(this).data('min'),
                step = $(this).data('step');
                val = $(this).parent().find('input[type=text]').val();

            $(this).slider({
                range: "max",
                min: min,
                max: max,
                step: step,
                value: val,
                slide: function( event, ui ) {
                    $(this).parent().find('input[type=text]').val( numberWithSpaces(ui.value) );
                }
            });
            $(this).parent().find('input[type=text]').val( numberWithSpaces( $(this).slider("value") ) );
        });
    }

    $(document).ready(function(){
        regionSelection();
        sliderRange()
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}