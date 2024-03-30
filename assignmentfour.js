function calculateMoney(ticketSell) {
    const perTicket = 120;
    const guardCost = 500;
    const staffLunch = 50 * 8;



    if (ticketSell < 0) {
        return "Invalid Number";
    } else {
        const netSell = (ticketSell * perTicket) - (guardCost +
            staffLunch);
        return netSell;
    }


}

const ticketSell = calculateMoney(5);

//=========================================================================

function checkName(names) {
    if (typeof names !== 'string') {
        return "Invalid";
    }

    let lastLetterCheck = names[names.length - 1].toLowerCase(); // Convert to lowercase for simplicity

    if (lastLetterCheck === 'a' || lastLetterCheck === 'e' || lastLetterCheck === 'i' || lastLetterCheck === 'o' || lastLetterCheck === 'u' || lastLetterCheck === 'w' || lastLetterCheck === 'y') {
        return "good Name";
    } else {
        return "bad Name";
    }
}

const names = checkName('Salman');


//=========================================================================

function deleteInvalids(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid";
    }
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i]))
            newArray.push(arr[i])
    }
    return newArray;
}
const newArr = deleteInvalids([NaN, 1, 12, 'a', -1, undefined, 'Salman']);


//=======================================================================

function password(typePass) {

    if (typePass.birthYear.toString().length !== 4) {
        return 'Invalid'
    }

    if (typePass.name == "" || typePass.birthYear == "" || typePass.siteName == "") {

        return 'Invalid'
    } return typePass.siteName + "#" + typePass.name + "@" + typePass.birthYear;
}

const inpt = { name: "kolimuddin", birthYear: 199, siteName: "google" };
const chek = password(inpt);

//=======================================================================

function monthlySavings(payments, livingCost) {

    let totalIncome = 0;
    for (const payment of payments) {
        totalIncome = totalIncome + payment;

    }


    let bankTax = 0;
    for (let i = 0; i < payments.length; i++) {
        if (payments[i] >= 3000) {
            bankTax += payments[i] * 0.2;
        }
    }


    const remainingAmount = totalIncome - bankTax - livingCost;


    if (remainingAmount < 0) {
        return "earn more";
    } else {
        return remainingAmount;
    }
}


const payments = [4000, 5000, 6000];
const livingCost = 500;
const remainingAmount = monthlySavings(payments, livingCost);



