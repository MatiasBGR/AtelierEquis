
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