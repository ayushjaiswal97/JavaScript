function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    y();
}
x();


function counter(){
    var counter = 0;
    return function(){
        counter++;
        console.log(counter);
    }
}
var c = counter();
c();
c();
c();