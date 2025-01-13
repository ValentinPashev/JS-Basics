function lunchBreak(nameOfSeries, durationOfEpisode, durationOfLunchBreak) {
    let timeForLunch = durationOfLunchBreak * (1 / 8)
    let timeForChill = durationOfLunchBreak * 0.25
    let totalTimeLeft = durationOfLunchBreak - timeForLunch - timeForChill
    let timeLeft = Math.abs(durationOfEpisode - totalTimeLeft)

    if (totalTimeLeft >= durationOfEpisode) {
        console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(timeLeft)} more minutes.`)
    }
}

lunchBreak("Game of Thrones",
60,
96
)