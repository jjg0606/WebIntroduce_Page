if(typeof ssafy == 'undefined')
{
    ssafy = {};

}

ssafy.ha={
    init:function (){
       $('.section-1-background').hover(function () {
               // over
               $('#headerHoslogo').css('visibility','visible');
           }, function () {
               // out
               $('#headerHoslogo').css('visibility','hidden');
           }
       );
            
    }

}
    

