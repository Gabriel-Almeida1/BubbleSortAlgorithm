let carsModels = []
let carsYears = []
let carsValues = []
let count = 0
let continueOrStop = true

while (continueOrStop) {
    let carInput = prompt("Car model: ")
    let carYear = parseInt(prompt("Car year: "))
    let carValue = parseFloat(prompt("Car value: "))
    carsModels[count] = carInput
    carsYears[count] = carYear
    carsValues[count] = carValue
    count++
    let addAnotherCar = parseInt(prompt("Type 1 to stop the program or ENTER to add another car: "))
    if (addAnotherCar === 1) {
        continueOrStop = false
    }
}

for (i = 0; i < carsModels.length; i++) {
    console.log("Car model: ",carsModels[i], "; Car year: ", carsYears[i], "; Car value: ", carsValues[i])
}

let tempValue = 0
let tempModel = ''
let tempYear = 0


for (i = 0; i < carsValues.length; i++) {
    for (j = 0; j < carsValues.length - i - 1; j++) {
        if (carsValues[j] > carsValues[j + 1]) {
            
            tempValue = carsValues[j]
            tempModel = carsModels[j]
            tempYear = carsYears[j]

            carsValues[j] = carsValues[j + 1]
            carsValues[j + 1] = tempValue

            carsModels[j] = carsModels[j + 1]
            carsModels[j + 1] = tempModel

            carsYears[j] = carsYears[j + 1]
            carsYears[j + 1] = tempYear
           
        }
    }
}


console.log(carsValues)
console.log(carsModels)
console.log(carsYears)