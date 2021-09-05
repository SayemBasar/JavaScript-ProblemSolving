/* ------------------
    Problem: 01
------------------ */

function seerToMon(seer) {

    // Here this condition check input parameter is a number or not.
    if (typeof seer != 'number') {
        return 'Your input is not a Number. Please enter a number';
    }

    // Only Positive parameter is allowed other wise return a error message.
    else if (seer < 0) {
        return 'Please Enter a positive number...!';
    }
    const mon = seer / 40;
    return mon;
}

let seerCount = 2400;
const monResult = seerToMon(seerCount);
console.log(monResult);


/* ------------------
    Problem: 02
------------------ */

function totalSales(shirt, pant, shoe) {

    // To check all input parameter is number or not.
    if ((typeof shirt != 'number') || (typeof pant != 'number') || (typeof shoe != 'number')) {
        return 'Plese enter a number as quantity of all';
    }

    // To check all input parameters are positive number or not.
    else if ((shirt < 0) || (pant < 0) || (shoe < 0)) {
        return 'please enter a positive quantity';
    }
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    const totalShirtPrice = shirt * shirtPrice;
    const totalPantPrice = pant * pantPrice;
    const totalShoePrice = shoe * shoePrice;

    const totalSalesPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalSalesPrice;
}

let shirtQuantity = 10;
let pantQuantity = 5;
let shoeQuantity = 8;
const totalPrice = totalSales(shirtQuantity, pantQuantity, shoeQuantity);
console.log(totalPrice);


/* ------------------
    Problem: 03
------------------ */

function deliveryCost(tShirt) {
    const costPerTshirt1st = 100; // Delivery cost per tShirt for 1st (1-100) slot
    const costPerTshirt2nd = 80; // Delivery cost for 2nd (101-200) slot
    const costPerTshirtRest = 50;

    // To check input parameter is number or not.
    if (typeof tShirt != 'number') {
        return 'please Enter a number';
    }
    // Suppose input parameter is number but need to check it's positive or negative?
    else if (tShirt < 0) {
        return 'please give positive input';
    }

    else if (tShirt <= 100) {
        const deliveryCost1st = tShirt * costPerTshirt1st;
        return deliveryCost1st;
    }
    else if (tShirt <= 200) {
        const deliveryCost1st = 100 * costPerTshirt1st;
        const restTshirt = tShirt - 100;
        const deliveryCost2nd = restTshirt * costPerTshirt2nd;
        const totatlDeliveryCost = deliveryCost1st + deliveryCost2nd;
        return totatlDeliveryCost;
    }
    else {
        const deliveryCost1st = 100 * costPerTshirt1st;
        const deliveryCost2nd = 100 * costPerTshirt2nd;
        const restTshirt = tShirt - 200;
        const deliveryCostRest = restTshirt * costPerTshirtRest;
        const totatlDeliveryCost = deliveryCost1st + deliveryCost2nd + deliveryCostRest;
        return totatlDeliveryCost;
    }
}

const tShirtQuantity = 1040;
const totalCost = deliveryCost(tShirtQuantity);
console.log(totalCost);


/* ------------------
    Problem: 04
------------------ */

const friendsName = ['Supriyo', 'al-Imran', 'Basar', 'Ibrahim', 'SalahUddin', 'Sayem'];

function perfectFriend(friends) {

    // Checking Array empty or not AND 
    // Array is exist or not.
    if ((friends.length < 1) || (Array.isArray(friends) != true)) {
        return 'Array is Empty OR Array not exist';
    }
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 5) {
            let pickedName = friends[i];
            return pickedName;
        }
    }
}

const selectedFriendName = perfectFriend(friendsName);
console.log(selectedFriendName);