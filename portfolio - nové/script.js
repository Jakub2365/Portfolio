gsap.registerPlugin(ScrollTrigger);
gsap.to(".box", { 
    x: 200, 
    duration: 1 
});

function obsahTrojuhelniku(a, v){
    // a = strana AB, v = vyska
    let obsah = (1/2 * a * v)
    console.log("Strana A:",a,"Vyska V:",v, "obsah:",obsah)
}
obsahTrojuhelniku(3.1, 3)

function obvodCtverce(a){
    let obvod = (4 * a)
    console.log("Strana A:",a,"obvod:",obvod)
}
obvodCtverce(5)

//let promenna1 = 1;
//var promenna2= "ahoj";
// () - vstup
function vypisPozdrav(vstup1, vstup2, vstup3){
    var prumer = (vstup1 + vstup2 + vstup3) / 3;
    console.log(prumer);
}
vypisPozdrav(8,6,3)

let pole = [8,6,3]
// nebo = ||
//&& a zároveň
//== rovno
//!= není rovno

function vypisPozdrav(array){
    if(array == null || array === null){
        alert("test 123")
    }else{
        for(let i = 0; i < array.length; i++)
        {
            console.log(array[i])
        }
    }
}
vypisPozdrav(pole)