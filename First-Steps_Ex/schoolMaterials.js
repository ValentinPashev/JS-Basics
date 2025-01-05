// Цена на пакетите химикали => 2 * 5.80 = 11.60 лв.
// Цена на пакетите маркери => 3 * 7.20 = 21.60 лв.
// Цена на препарата => 4 * 1.20 = 4.80 лв.
// Цена за всички материали => 11.60 + 21.60 + 4.80 = 38.00 лв.
// 25% = 0.25
// Цена с намаление = 38.00 – (38.00 * 0.25) = 28.50 лв.

function schoolMaterials(numOfPens, numOfMarkers, litersOfAgent, discount) {
    let priceForPens = numOfPens * 5.80
    let priceForMarkers = numOfMarkers * 7.2
    let priceForAgent = litersOfAgent * 1.20

    let totalSum = priceForAgent + priceForMarkers + priceForPens
    let totalWithDiscount = totalSum - ( totalSum * (discount / 100))
    console.log(totalWithDiscount);
    
}

schoolMaterials(2,
    3,
    4,
    25 )