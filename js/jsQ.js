var scene1 = document.getElementById('scene1');
var parallaxInstance1 = new Parallax(scene1);
parallaxInstance1.relativeInput=true;
parallaxInstance1.hoverOnly=true;
parallaxInstance1.scalar(30,30);
parallaxInstance1.friction( 0.075, 0.075);
parallaxInstance1.pointerEvents= true;

var scene2 = document.getElementById('scene2');
var parallaxInstance2 = new Parallax(scene2);
parallaxInstance2.relativeInput=true;
parallaxInstance2.hoverOnly=true;
parallaxInstance2.scalar(30,30);
parallaxInstance2.friction( 0.075, 0.075);
parallaxInstance2.pointerEvents= true;

var scene3 = document.getElementById('scene3');
var parallaxInstance3 = new Parallax(scene3);
parallaxInstance3.relativeInput=true;
parallaxInstance3.hoverOnly=true;
parallaxInstance3.scalar(30,30);
parallaxInstance3.friction( 0.075, 0.075);
parallaxInstance3.pointerEvents= true;


$(document).ready(function(){
  $(document.getElementById('layerS13')).hover(function(){
    $(".DServicio").animate({ opacity: 1 },2000, "linear");
    }, function(){
    $(".DServicio").css("opacity", "1");
  });
});

$(document).ready(function(){
  $(document.getElementById('layerS23')).hover(function(){
    $(".GIdeas").animate({ opacity: 1 },2000, "linear");
    }, function(){
    $(".GIdeas").css("opacity", "1");
  });
});

$(document).ready(function(){
  $(document.getElementById('layerS33')).hover(function(){
    $(".PEspeciales").animate({ opacity: 1 },2000, "linear");
    }, function(){
    $(".PEspeciales").css("opacity", "1");
  });
});

var e = document.getElementById('elem');
var spin = false;
var mauseover = true;

var spinner = function(){
if (spin) setTimeout(function(){ spin = false;}, 0);
e.classList.toggle('running', spin);
if (spin) setTimeout(spinner, 2000);
}

e.onmouseover = function(){
spin = true;
spinner();
};

e.onmouseout = function(){
spin = false;
mauseover = true;
};