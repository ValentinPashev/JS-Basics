// Сума за найлон: (10 + 2) * 1.50 = 18 лв.
// Сума за боя: (11 + 10%) * 14.50 = 175.45 лв.
// Сума за разредител: 4 * 5.00 = 20.00 лв.
// Сума за торбички: 0.40 лв.
// Обща сума за материали: 18 + 175.45 + 20.00 + 0.40 = 213.85 лв.
// Сума за майстори: (213.85 * 30%) * 8 = 513.24 лв.
// Крайна сума: 213.85 + 513.24 = 727.09 лв.

function repainting(plasticRequired, dyeRequired, concentrateRequired, hours){
    let priceForPlastic = (plasticRequired + 2) * 1.5
    let priceForDye = (dyeRequired + (dyeRequired * 0.1)) * 14.5
    let priceForConcentare = concentrateRequired * 5

    let totalSumForMaterials = priceForConcentare + priceForDye + priceForPlastic + 0.4
    let totalSumForWorkers = (totalSumForMaterials * 0.3) * hours
    let totalSum = totalSumForMaterials + totalSumForWorkers
    console.log(totalSum);
    

}

repainting(5,
    10,
    10,
    1)