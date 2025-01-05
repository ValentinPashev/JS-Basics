// Общо време за четене на книгата: 212 страници / 20 страници за час = 10.6 часа общо
// Необходимите часове на ден: 10.6 часа / 2 дни = 5.3 часа на ден


function reading (numberOfPages, pages, numberOfDays)
{
    totalForBook = numberOfPages / pages
    totalTimeForReading = totalForBook / numberOfDays
    console.log(totalTimeForReading);
    
}

reading(432,
    15,
    4 )