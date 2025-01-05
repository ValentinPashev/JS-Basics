function foodDelivery(numChickenMenus, numFishMenus, numVeggieMenus){
    let totalSumWithoutDelivery = (numChickenMenus * 10.35) + (numFishMenus * 12.40) + (numVeggieMenus * 8.15)
    let desertPrice = totalSumWithoutDelivery * 0.2
    let totalPrice = totalSumWithoutDelivery + desertPrice + 2.5

    console.log(totalPrice);
    


}

foodDelivery(9,
    2,
    6)