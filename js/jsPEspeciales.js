
var ex1 = document.getElementById('elem1');
var x1 = document.getElementById('equi1');
var spinx1 = false;
var despinx1 = false;
var spinnerx1 = function(){
ex1.classList.toggle('running', spinx1);
if (spinx1) setTimeout(spinnerx1, 0.3);
}
var sp1 = function(){
ex1.classList.toggle('derunning', despinx1); 
if (despinx1) setTimeout(sp1, 0.3);
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

var ex2 = document.getElementById('elem2');
var x2 = document.getElementById('equi2');
var spinx2 = false;
var despinx2 = false;
var spinnerx2 = function(){
ex2.classList.toggle('running', spinx2);
if (spinx2) setTimeout(spinnerx2, 0.3);
}
var sp2 = function(){
ex2.classList.toggle('derunning', despinx2); 
if (despinx2) setTimeout(sp2, 0.3);
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

var ex3 = document.getElementById('elem3');
var x3 = document.getElementById('equi3');
var spinx3 = false;
var despinx3 = false;
var spinnerx3 = function(){
ex3.classList.toggle('running', spinx3);
if (spinx3) setTimeout(spinnerx3, 0.3);
}
var sp3 = function(){
ex3.classList.toggle('derunning', despinx3); 
if (despinx3) setTimeout(sp3, 0.3);
}
x3.onmouseover = function(){
spinx3 = true;
despinx3 = false;
spinnerx3();
};
x3.onmouseout = function(){
spinx3 = false;
despinx3 = true;
sp3();
};


jQuery(function(){
    function random(n) {
        return Math.floor(Math.random() * n);
    }
    var tiempo = Math.floor(Math.random() *200)
    var transition_time = 200+tiempo;
    var waiting_time = 400+tiempo;
    var images = $('div#block1 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block1').offsetHeight;
    var boxWidth = document.getElementById('block1').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 20;
    var objectMinHeight = 8;
    
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
    var transition_time = 200+tiempo;
    var waiting_time = 400+tiempo;
    var images = $('div#block2 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block2').offsetHeight;
    var boxWidth = document.getElementById('block2').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 20;
    var objectMinHeight = 8;
    
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
    var transition_time = 200+tiempo;
    var waiting_time = 400+tiempo;
    var images = $('div#block3 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block3').offsetHeight;
    var boxWidth = document.getElementById('block3').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 20;
    var objectMinHeight = 8;
    
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
    var transition_time = 200+tiempo;
    var waiting_time = 400+tiempo;
    var images = $('div#block4 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block4').offsetHeight;
    var boxWidth = document.getElementById('block4').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 20;
    var objectMinHeight = 8;
    
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
    var transition_time = 200+tiempo;
    var waiting_time = 400+tiempo;
    var images = $('div#block5 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block5').offsetHeight;
    var boxWidth = document.getElementById('block5').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 20;
    var objectMinHeight = 8;
    
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
    var transition_time = 200+tiempo;
    var waiting_time = 400+tiempo;
    var images = $('div#block6 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block6').offsetHeight;
    var boxWidth = document.getElementById('block6').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 20;
    var objectMinHeight = 8;
    
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
    var transition_time = 200+tiempo;
    var waiting_time = 400+tiempo;
    var images = $('div#block7 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block7').offsetHeight;
    var boxWidth = document.getElementById('block7').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 20;
    var objectMinHeight = 8;
    
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
    var transition_time = 200+tiempo;
    var waiting_time = 400+tiempo;
    var images = $('div#block8 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block8').offsetHeight;
    var boxWidth = document.getElementById('block8').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 20;
    var objectMinHeight = 8;
    
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
    var transition_time = 200+tiempo;
    var waiting_time = 400+tiempo;
    var images = $('div#block9 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block9').offsetHeight;
    var boxWidth = document.getElementById('block9').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 20;
    var objectMinHeight = 8;
    
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
    var transition_time = 200+tiempo;
    var waiting_time = 400+tiempo;
    var images = $('div#block10 img');
    var n = images.length;
    var current = random(n);
    images.hide();
    images.eq(current).show();
    
    //get the size of the container
    var boxHeight = document.getElementById('block10').offsetHeight;
    var boxWidth = document.getElementById('block10').offsetWidth;
    
    //range of possible image scales
    var objectMaxHeight = 20;
    var objectMinHeight = 8;
    
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

