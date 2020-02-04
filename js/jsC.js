var e = document.getElementById('elem');
var spin = false;
var mauseover = true;

var spinner = function(){
if (spin) setTimeout(function(){ spin = false;}, 0);
e.classList.toggle('runningg', spin);
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
e.onmouseout = function(){
spin = false;
};



var ex1 = document.getElementById('elem2');
var exx1 = document.getElementById('xbrands');
var x1 = document.getElementById('equi1');
var e1 = document.getElementById('elem');
var spinx1 = false;
var despinx1 = true;
var spinnerx1 = function(){
ex1.classList.toggle('running', spinx1);
exx1.classList.toggle('running', spinx1);
e1.classList.toggle('running', spinx1);
if (spinx1) setTimeout(spinnerx1, 1000);
}
var sp1 = function(){
ex1.classList.toggle('derunning', despinx1); 
exx1.classList.toggle('derunning', despinx1);
if (despinx1) setTimeout(sp1, 1000);
}
x1.onmouseover = function(){
spinx1 = true;
despinx1 = false;
spinnerx1();
};
x1.onmouseout = function(){
spinx1 = false;
despinx1 = true;
sp1();
};



var ex2 = document.getElementById('elem3');
var exx2 = document.getElementById('xmark');
var x2 = document.getElementById('equi2');
var spinx2 = false;
var despinx2 = true;
var spinnerx2 = function(){
ex2.classList.toggle('running', spinx2);
exx2.classList.toggle('running', spinx2);
e1.classList.toggle('running', spinx2);
if (spinx2) setTimeout(spinnerx2, 1000);
}
var sp2 = function(){
ex2.classList.toggle('derunning', despinx2); 
exx2.classList.toggle('derunning', despinx2);
if (despinx2) setTimeout(sp2, 1000);
}
x2.onmouseover = function(){
spinx2 = true;
despinx2 = false;
spinnerx2();
};
x2.onmouseout = function(){
spinx2 = false;
despinx2 = true;
sp2();
};




jQuery(function(){
    function random(n) {
        return Math.floor(Math.random() * n);
    }
    var tiempo = Math.floor(Math.random() *200)
    var transition_time = 150+tiempo;
    var waiting_time = 10+tiempo;
    var images = $('div#block1 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block1').offsetHeight;
    var boxWidth = document.getElementById('block1').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 80;
    var objectMinHeight = 60;
    
    var interval_id = setInterval(function () {
        images.eq(current).fadeOut(transition_time, function () {
            current = random(n);
            
            //gets reference to selected image
            var $domImage = images.eq(current);
            
            //generates random heights and widths for the image to be shown in
            var generatedHeight = 
            		Math.floor(
                	Math.random() * (objectMaxHeight - objectMinHeight)
                 ) + objectMinHeight;

						// assigns values to the image
            $domImage.css('height', generatedHeight); 
            $domImage.css('width', "auto"); 
            
            var imageAutoWidth = $domImage.width();
            
            var generatedYLocation = Math.floor(
              Math.random() * (boxHeight - generatedHeight + 1)
            ) + 0;
            
            var generatedXLocation = Math.floor(
                Math.random() * (boxWidth - imageAutoWidth)
            ) + 0;
            
            $domImage.css('top', generatedYLocation);
            $domImage.css('left', generatedXLocation);
            $domImage.fadeIn(transition_time);
        });
    }, 2 * transition_time + waiting_time);
})

jQuery(function(){
    function random(n) {
        return Math.floor(Math.random() * n);
    }
    var tiempo = Math.floor(Math.random() *200)
    var transition_time = 150+tiempo;
    var waiting_time = 10+tiempo;
    var images = $('div#block2 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block2').offsetHeight;
    var boxWidth = document.getElementById('block2').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 80;
    var objectMinHeight = 60;
    
    var interval_id = setInterval(function () {
        images.eq(current).fadeOut(transition_time, function () {
            current = random(n);
            
            //gets reference to selected image
            var $domImage = images.eq(current);
            
            //generates random heights and widths for the image to be shown in
            var generatedHeight = 
                    Math.floor(
                    Math.random() * (objectMaxHeight - objectMinHeight)
                 ) + objectMinHeight;

                        // assigns values to the image
            $domImage.css('height', generatedHeight); 
            $domImage.css('width', "auto"); 
            
            var imageAutoWidth = $domImage.width();
            
            var generatedYLocation = Math.floor(
              Math.random() * (boxHeight - generatedHeight + 1)
            ) + 0;
            
            var generatedXLocation = Math.floor(
                Math.random() * (boxWidth - imageAutoWidth)
            ) + 0;
            
            $domImage.css('top', generatedYLocation);
            $domImage.css('left', generatedXLocation);
            $domImage.fadeIn(transition_time);
        });
    }, 2 * transition_time + waiting_time);
})
jQuery(function(){
    function random(n) {
        return Math.floor(Math.random() * n);
    }
    var tiempo = Math.floor(Math.random() *200)
    var transition_time = 150+tiempo;
    var waiting_time = 10+tiempo;
    var images = $('div#block3 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block3').offsetHeight;
    var boxWidth = document.getElementById('block3').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 120;
    var objectMinHeight = 100;
    
    var interval_id = setInterval(function () {
        images.eq(current).fadeOut(transition_time, function () {
            current = random(n);
            
            //gets reference to selected image
            var $domImage = images.eq(current);
            
            //generates random heights and widths for the image to be shown in
            var generatedHeight = 
                    Math.floor(
                    Math.random() * (objectMaxHeight - objectMinHeight)
                 ) + objectMinHeight;

                        // assigns values to the image
            $domImage.css('height', generatedHeight); 
            $domImage.css('width', "auto"); 
            
            var imageAutoWidth = $domImage.width();
            
            var generatedYLocation = Math.floor(
              Math.random() * (boxHeight - generatedHeight + 1)
            ) + 0;
            
            var generatedXLocation = Math.floor(
                Math.random() * (boxWidth - imageAutoWidth)
            ) + 0;
            
            $domImage.css('top', generatedYLocation);
            $domImage.css('left', generatedXLocation);
            $domImage.fadeIn(transition_time);
        });
    }, 2 * transition_time + waiting_time);
})
jQuery(function(){
    function random(n) {
        return Math.floor(Math.random() * n);
    }
    var tiempo = Math.floor(Math.random() *200)
    var transition_time = 150+tiempo;
    var waiting_time = 10+tiempo;
    var images = $('div#block4 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block4').offsetHeight;
    var boxWidth = document.getElementById('block4').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 160;
    var objectMinHeight = 140;
    
    var interval_id = setInterval(function () {
        images.eq(current).fadeOut(transition_time, function () {
            current = random(n);
            
            //gets reference to selected image
            var $domImage = images.eq(current);
            
            //generates random heights and widths for the image to be shown in
            var generatedHeight = 
                    Math.floor(
                    Math.random() * (objectMaxHeight - objectMinHeight)
                 ) + objectMinHeight;

                        // assigns values to the image
            $domImage.css('height', generatedHeight); 
            $domImage.css('width', "auto"); 
            
            var imageAutoWidth = $domImage.width();
            
            var generatedYLocation = Math.floor(
              Math.random() * (boxHeight - generatedHeight + 1)
            ) + 0;
            
            var generatedXLocation = Math.floor(
                Math.random() * (boxWidth - imageAutoWidth)
            ) + 0;
            
            $domImage.css('top', generatedYLocation);
            $domImage.css('left', generatedXLocation);
            $domImage.fadeIn(transition_time);
        });
    }, 2 * transition_time + waiting_time);
})
jQuery(function(){
    function random(n) {
        return Math.floor(Math.random() * n);
    }
    var tiempo = Math.floor(Math.random() *200)
    var transition_time = 100+tiempo;
    var waiting_time = 10+tiempo;
    var images = $('div#block5 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block5').offsetHeight;
    var boxWidth = document.getElementById('block5').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 120;
    var objectMinHeight = 100;
    
    var interval_id = setInterval(function () {
        images.eq(current).fadeOut(transition_time, function () {
            current = random(n);
            
            //gets reference to selected image
            var $domImage = images.eq(current);
            
            //generates random heights and widths for the image to be shown in
            var generatedHeight = 
                    Math.floor(
                    Math.random() * (objectMaxHeight - objectMinHeight)
                 ) + objectMinHeight;

                        // assigns values to the image
            $domImage.css('height', generatedHeight); 
            $domImage.css('width', "auto"); 
            
            var imageAutoWidth = $domImage.width();
            
            var generatedYLocation = Math.floor(
              Math.random() * (boxHeight - generatedHeight + 1)
            ) + 0;
            
            var generatedXLocation = Math.floor(
                Math.random() * (boxWidth - imageAutoWidth)
            ) + 0;
            
            $domImage.css('top', generatedYLocation);
            $domImage.css('left', generatedXLocation);
            $domImage.fadeIn(transition_time);
        });
    }, 2 * transition_time + waiting_time);
})