/**  (20 points) Create the function calculateInvoice in Javascript that returns the invoice for one customer (how much they spent).  */

// The parameters of the function should be starterPrice, maindishPrice, dessertPrice and beveragePrice. The function will return the sum of these four parameters.
let calculateInvoice = (starterPrice, maindishPrice, dessertPrice, beveragePrice) => starterPrice + maindishPrice + dessertPrice + beveragePrice


/**  (10 points) Use the prices on your menu to create four variables that you will pass to the function calculateInvoice as arguments.
 * Print the result on the console. 
 * 
 * For first variable (starterPrice) I try to use querySelector and what we learned in class

 * **/

// get the food-card div for snails
let starter_dish = document.querySelector('#snails')

//get last child which contains the price as string
let price = starter_dish.lastElementChild.innerHTML

//slice string and parse to float = starterPrice
let starterPrice = parseFloat(price.slice(2, price.length))

//...other prices
let maindishPrice = 12.90;
let dessertPrice = 4.90;
let beveragePrice = 3.90;

//print on console
console.log(`Die Rechnungssume beträgt € ${calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice)}. `)

/**  (10 points) Create at least 3 different combinations of different dishes on your menu to calculate the invoice
 * and print it on the console.*/

combinations = [{ stp: 4.90, mdp: 12.20, dp: 6.90, bp: 4.90 }, { stp: 3.90, mdp: 15.20, dp: 8.90, bp: 2.90 }, { stp: 6.90, mdp: 19.90, dp: 5.90, bp: 3.90 }]

combinations.forEach((combination, i) => {
    console.log(`Invoice Number ${i+1}: Total Amount: € ${Math.round((calculateInvoice(combination.stp, combination.mdp, combination.dp, combination.bp)*100))/100}`)
})

// Bonus Points:
// (10 points) Create a function studentInvoice that will apply a 10% discount to the final invoice. This function should have the same parameters as the function calculateInvoice. This discount applies to the dishes but NOT the beverages. Print 3 examples of studentInvoice on the console.

let studentInvoice = (stp, mdp, dp, bp) => calculateInvoice(stp * 0.9, mdp * 0.9, dp * 0.9, bp) //can reuse the function from above

//For Modal - TODO implement rating functionality

let modal = document.querySelector('.rating-modal')
let stars = document.querySelector('#stars')

//toggle modal class hide
let toggleModal = () => {
    modal.classList.toggle('hide')
}

//if stars get clicked in footer open modal
stars.addEventListener('click', toggleModal)

//if anything gets clicked when modal is open close it again - (no good solution -> TODO)
modal.addEventListener('click', toggleModal)