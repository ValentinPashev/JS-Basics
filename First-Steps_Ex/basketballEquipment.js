function basketEquipment(annualTax) {
    let basketShoes = annualTax - (annualTax * 0.4)
    let basketKit = basketShoes - (basketShoes * 0.2)
    let basketBall = basketKit * 0.25
    let basketAccsessories = basketBall * 0.2
    let totalSum = basketShoes + basketKit + basketBall + basketAccsessories + annualTax
    console.log(totalSum);
    

}

basketEquipment(550)