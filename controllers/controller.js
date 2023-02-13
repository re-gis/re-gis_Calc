// Addition controller

const addNumbers = (req, res) => {
    // Getting a list of numbers
    
    let numbersToAdd = [req.body.numbers]
    let sum = 0

    for(let i =0; i < numbersToAdd.length; i++) {
        sum += numbersToAdd.i
    }
    res.json({ Sum: sum })
}



// Multiplication controller

const multiplyNumbers = (req, res) => {
   // Getting the array of numbers from the user
    
   let numbersArr = [req.body.numbers]
   let product = 1
   // Loop through the numbers' array

   for( let i = 0; i < numbersArr.length; i++) {
    product = product * numbersArr[i]

}
res.json({ Product: product })
   
}


module.exports = {
    addNumbers,
    multiplyNumbers,
}