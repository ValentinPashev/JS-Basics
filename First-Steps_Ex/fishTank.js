// обем на аквариумa: 85 * 75 * 47 = 299625 см3
// обем в литри: 299625 * 0.001 или  299625 / 1000 => 299.625 литра
// заето пространство: 17% = 0.17
// нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра

function fishTank(lenght, width, height, percent) {
    let volume = lenght * width * height
    let volumeInLiters = volume / 1000
    let spaceTaken = percent / 100
    let litersRequired = volumeInLiters * (1 - spaceTaken)

    console.log(litersRequired);
    
}
fishTank(105,
    77,
    89,
    18.5)