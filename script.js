
/**
 * 
 * @param {MouseEvent} event 
 */
const calculateChange = function (event) {
    event.preventDefault()
    let productPrice = document.getElementById('productPrice').value
    let paidAmount = document.getElementById('paidAmount').value

    document.getElementById('calculateButton').value = parseInt(paidAmount) - parseInt(productPrice)

    console.log(paidAmount - productPrice)
    const totalReturnValue = paidAmount - productPrice
    let changeLeft = paidAmount - productPrice

    const returnValues = {}

    returnValues.fiveHundreds = Math.floor(changeLeft / 500)
    changeLeft = changeLeft % 500
    returnValues.hundreds = Math.floor(changeLeft / 100)
    changeLeft = changeLeft % 100
    returnValues.fiftys = Math.floor(changeLeft / 50)
    changeLeft = changeLeft % 50
    returnValues.twentys = Math.floor(changeLeft / 20)
    changeLeft = changeLeft % 20
    returnValues.tens = Math.floor(changeLeft / 10)
    changeLeft = changeLeft % 10
    returnValues.fives = Math.floor(changeLeft / 5)
    changeLeft = changeLeft % 5
    returnValues.twos = Math.floor(changeLeft / 2)
    changeLeft = changeLeft % 2
    returnValues.ones = changeLeft
    console.log(returnValues)

    let displayChange = `The amount the customer gets back is: $${totalReturnValue},  split up into: `

    if (returnValues.fiveHundreds > 0) {
        displayChange += `$500 bills: ${returnValues.fiveHundreds}, `
    }
    if (returnValues.hundreds > 0) {
        displayChange += `$100 bills: ${returnValues.hundreds}, `
    }
    if (returnValues.fiftys > 0) {
        displayChange += `$50 bills: ${returnValues.fiftys}, `
    }
    if (returnValues.twentys > 0) {
        displayChange += `$20 bills: ${returnValues.twentys}, `
    }
    if (returnValues.tens > 0) {
        displayChange += `$10 bills: ${returnValues.tens}, `
    }
    if (returnValues.fives > 0) {
        displayChange += `$5 bills: ${returnValues.fives}, `
    }
    if (returnValues.twos > 0) {
        displayChange += `$2 bills: ${returnValues.twos}, `
    }
    if (returnValues.ones > 0) {
        displayChange += `$1 bills: ${returnValues.ones}. `
    }


    alert (displayChange)
}