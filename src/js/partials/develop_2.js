function blockHeightCalc(){
    var findBlockHeight = $(window).height() - $('footer').height() ;
        $('.conteiner-ty').height(findBlockHeight);
}

try{

    $(document).ready(function(){
        var flagg = true ;
        $('.draggable-button>button').click(function(){
            if (flagg){
                $('.white-block').slideDown("slow", function(){
                    var target = $('.white-block').offset().top;
                    $(scroller).animate({scrollTop:target},500);
                });
                flagg = false ;
            }

        })
    });

    $(window).load(function(){
        blockHeightCalc();
    });

    $(window).resize(function(){
        blockHeightCalc();
    });

}
catch(e){

    console.log('develop_2.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}