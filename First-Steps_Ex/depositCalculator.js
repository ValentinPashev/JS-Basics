// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

function calculator (depositSum, depositMargin, anualPercentage){
    let percentage = anualPercentage / 100
    let total = depositSum + depositMargin * ((depositSum * percentage) / 12)
    console.log(total);
    
}

calculator(2350,
    6,
    7 )