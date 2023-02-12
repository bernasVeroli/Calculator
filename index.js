const n0 = document.getElementById('zero');
const n1 = document.getElementById('1');
const n2 = document.getElementById('2');
const n3 = document.getElementById('3');
const n4 = document.getElementById('4');
const n5 = document.getElementById('5');
const n6 = document.getElementById('6');
const n7 = document.getElementById('7');
const n8 = document.getElementById('8');
const n9 = document.getElementById('9');

const sum = document.getElementById('add');
const sub = document.getElementById('sub');
const div = document.getElementById('div');
const mul = document.getElementById('mul');

const mP = document.getElementById('m+');
const m = document.getElementById('m');
const dot = document.getElementById('dot');

const ac = document.getElementById('ac');
const equal = document.getElementById('equal');
const result = document.getElementById('result');

const background = document.getElementById('background');


setInterval(function(){
    const wCenter = window.innerWidth/2 - 125;
    background.style.left = wCenter + 'px' ;  
    result.style.left   = wCenter + 'px';

    console.log(wCenter);
}, 100);


//#region numbers input
n0.addEventListener('click', function(){ result.textContent += '0'; });
n1.addEventListener('click', function(){ result.textContent += '1'; });
n2.addEventListener('click', function(){ result.textContent += '2'; });
n3.addEventListener('click', function(){ result.textContent += '3'; });
n4.addEventListener('click', function(){ result.textContent += '4'; });
n5.addEventListener('click', function(){ result.textContent += '5'; });
n6.addEventListener('click', function(){ result.textContent += '6'; });
n7.addEventListener('click', function(){ result.textContent += '7'; });
n8.addEventListener('click', function(){ result.textContent += '8'; });
n9.addEventListener('click', function(){ result.textContent += '9'; });
//#endregion

sum.addEventListener('click', function() {result.textContent += '+'});
sub.addEventListener('click', function() {result.textContent += '-'});
div.addEventListener('click', function() {result.textContent += '/'});
mul.addEventListener('click', function() {result.textContent += '*'});
dot.addEventListener('click', function() {result.textContent += '.'});

// I don't know how to do
mP.addEventListener('click', function() {});
m.addEventListener('click', function() {});

ac.addEventListener('click', function() { result.textContent = undefined});
equal.addEventListener('click', function() { 
    result.textContent = +result.textContent * 1;
});