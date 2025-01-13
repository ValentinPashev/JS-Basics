function add15 (minutes, seconds) {
    let m = Number(minutes)
    let s = Number(seconds)
    let secondsToUse = 0

    s += 15

    if (s >= 60) {
        m += 1
        secondsToUse = s - 60
    } else {
        secondsToUse = s
    }

    if (m == 24){
        m = 0
    }


    if (secondsToUse < 10) {
        console.log(`${m}:0${secondsToUse}`)
    } else if (m >= 24) {
        console.log(`0:${secondsToUse}`)
    } else {
        console.log(`${m}:${secondsToUse}`)
    }
}

add15(12, 49)