function calculateSeconds(num1, num2, num3) {
    let totalSeconds = num1 + num2 + num3
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`)
    }

}

calculateSeconds(40, 50, 42
    
)