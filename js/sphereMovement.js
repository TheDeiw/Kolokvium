$(document).ready(function(){

    var h, w, nh, nw, newq, bspeed, $balls, $ballsDiv, $container;
    
    $balls = $('.sphere');
    $ballsDiv = $('.sphere > body');
    $container = $('body');
    
    bspeed = 3000; // balls speed number. Higher price - lower speed

    function makeNewPosition(){
        // Get viewport dimensions (remove the dimension of the div)
        h = $balls.height() + 250;
        w = $balls.width() + 50;
        
        nh = Math.floor(Math.random() * h);
        nw = Math.floor(Math.random() * w);
    }
    
    function animateDiv(myclass){
        makeNewPosition();
        $(myclass).animate({ top: nh, left: nw }, bspeed,  function(){
          animateDiv(myclass);        
        });
    }
    
    animateDiv('#sphere1');
    animateDiv('#sphere2');
    animateDiv('#sphere3');
});