function blockHeightCalc(){
    var findBlockHeight = $(window).height() - $('footer').height() ;
        $('.conteiner-ty').height(findBlockHeight);
}

try{

    $(document).ready(function(){
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