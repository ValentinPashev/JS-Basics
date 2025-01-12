
let area = 0

function calculateFaceOfFigure(type, a, b){


    if (type == 'square'){
        area = a * a
        console.log(area.toFixed(3))
        
    } else if (type == 'rectangle'){
        area = a * b
        console.log(area.toFixed(3))

    } else if (type == 'circle') {
        let r = a
        let pi = Math.PI
        area = pi * r
        console.log(area.toFixed(3))

    }   else if (type == 'triangle'){
        area = a * b
        console.log(area.toFixed(3))
    }
}

calculateFaceOfFigure("rectangle",
7,
2.5
)