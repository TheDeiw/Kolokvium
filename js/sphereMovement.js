/*$(document).ready(function(){

    var h, w, nh, nw, newq, bspeed, $balls, $ballsDiv, $container;
    
    $balls = $('.sphere');
    $ballsDiv = $('.sphere > body');
    $container = $('body');
    
    bspeed = 5000; // balls speed number. Higher price - lower speed

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
    //animateDiv('#sphere2');
    //animateDiv('#sphere3');
});*/

const root = document.querySelector(":root"); // we first get the root element
for(let i = 0; i < 10; i++) {
  root.style.setProperty(`--rando${i}`, `${Math.floor(Math.random() * 200) + 1}px`);
}


/*
const sphere = document.getElementsById('sphere');

function getRandomCoordinate(max) {
  return Math.floor(Math.random() * max);
}

function animateSphere() {
  const maxX = window.innerWidth - sphere.clientWidth;
  const maxY = window.innerHeight - sphere.clientHeight;
  const newX = getRandomCoordinate(maxX);
  const newY = getRandomCoordinate(maxY);

  sphere.style.transform = `translate(${newX}px, ${newY}px)`;

  requestAnimationFrame(animateSphere);
}

/*function move(){
    sphere.style.transform = `rotate(20deg)`;
}
move();
console.log("jdsjd");
animateSphere();*/

/*
$(document).ready(function(){
  animateDiv('.sphere1');
  //animateDiv('.b');
  //animateDiv('.c');
  //animateDiv('.d');
});

function makeNewPosition(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}

function animateDiv(myclass){
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
    animateDiv(myclass);        
  });
  
};*/
