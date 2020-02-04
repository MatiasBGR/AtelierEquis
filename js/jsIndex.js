if (window.innerWidth > 950) {
   
(function(){
  setTimeout(
    function() {
    // Init
    var container = document.getElementById("container"),
      inner = document.getElementById("inner");

    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft ;
        this._y = e.offsetTop ;
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(event) {
      update(event);
    };

    var onMouseLeaveHandler = function() {
      inner.style = "";
    };

    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //-----------------------------------------

    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;

    };

    //-----------------------------------------

    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
  },6000)
})();

$(function(){
        var $win = $(window),
        w = 0,h = 0,
        opacity = 1,
        getWidth = function() {
            w = $win.width();
            h = $win.height();
        };

        $win.mousemove(function(e) {
            getWidth();
            if (e.pageX > w*6/10) {
              opacity = (  (e.pageX-(w*0.6))/((w*0.9)-(w*0.6))  );
              console.log(opacity);
            $('#txt').css('opacity',opacity);
            }
            if (e.pageX < w*6/10) {
              opacity = (e.pageX/w * 0.5) + (e.pageY/h * 0.5)+0.7;
              console.log(opacity);
            $('#txt').css('opacity',0);
            }
            if (e.pageX > w*9/10) {
               opacity =1-(e.pageX-w*0.8)/((w)-w*0.8);
              console.log(opacity);
            $('#txt').css('opacity',opacity);
            }

        });
    });

$(function(){
        var $win = $(window),
        w = 0,h = 0,
        opacity = 1,
        getWidth = function() {
            w = $win.width();
            h = $win.height();
        };

        $win.mousemove(function(e) {
            getWidth();
            if (e.pageX < w*4/10) {
              opacity = ( ( (w*0.4)-e.pageX )/ ((w*0.4)-(w*0.2)));
              console.log(opacity);
            $('#ds').css('opacity',opacity);
            }
            if (e.pageX > w*4/10) {
              console.log(opacity);
            $('#ds').css('opacity',0);
            }
            if (e.pageX < w*2/10) {
              console.log(opacity);
            $('#ds').css('opacity',0);
            }

        });
    });
} else {
  setTimeout(
    function(){
    VanillaTilt.init(document.querySelector(".tilt"), {
    max: 4,
    speed: 10,
    gyroscopeMinAngleY:  0,     // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
    gyroscopeMaxAngleY:  90      // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
  }); 

      if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        // alpha: rotation around z-axis
        var rotateDegrees = event.alpha;
        // gamma: left to right
        var leftToRight = event.gamma;
        // beta: front back motion
        var frontToBack = event.beta;

        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
    }

var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
   if (frontToBack>45) {
       $('#ds').css('opacity',1);
      $('#txt').css('opacity',0);
   }else{
      $('#ds').css('opacity',0);
       $('#txt').css('opacity',1);
   }
  };



  },8000);



}





































