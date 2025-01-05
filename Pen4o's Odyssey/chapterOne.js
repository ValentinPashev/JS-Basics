// Тоеремата :
// a + b> c
// a + c> b
// b + c> a


function triangle(a, b, c){
    if (a + c > b && a + b > c && b + c > a) {

        console.log(`The Triangle of Truth with sides ${a}, ${b}, and ${c} has been validated. Pen4o, you may begin your journey!`);
    }
    
    else {

        console.log(`The Triangle of Truth with sides ${a}, ${b}, and ${c} is invalid. Pen4o remains stuck!`)
    }   
}

triangle(1, 2, 3)