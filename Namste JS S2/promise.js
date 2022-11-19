// Promise & Promise Chain //
// createOrder()
// proceedToPayment()
// showOrderSummary()
// updateWallet()

const cart = [
    {
        item: "ikigai",
        price: 500
    },
    {
        item: "The Secret",
        price: 600
    }, {
        item: "The Power of Subconscious Mind",
        price: 500
    },
]

let walletBalance = 2000;


createOrder(cart, cart[0])
    .then(function (order) {
        return order
    })
    .then(function (order) {
        return proceedToPayment(order)
    })
    .then(function (paymentStatus) {
        console.log(paymentStatus.message)
        return paymentStatus
    })
    .then((status) => {
        console.log(status)
        return showOrderSummary(status)
    })
    .then((summary)=>{
       console.log({
        item: summary.status.order.item,
        orderId: summary.status.order.orderId
       })
       return summary.status.balance
    })
    .then((balance)=>{
        console.log('Wallet Balance:', balance)
    })
    .catch(function (err) {
        console.log(err.message)
    })


function createOrder(cart, item) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error('Cart is Empty')
            reject(err)
        }
        resolve({
            item,
            orderId: 1
        })

    })
    return pr;
}

function validateCart(cart) {
    const result = cart?.length ? true : false
    return result;
}

function proceedToPayment(order) {
    return new Promise(function (resolve, reject) {
        if (!order.orderId) {
            const err = new Error('Order is Invalid')
            reject(err)
        }
        walletBalance = walletBalance - order.item.price
        resolve({
            message: 'Payment Successful',
            balance: walletBalance,
            order
        })
    })
}

function showOrderSummary(status) {
    return new Promise((resolve, reject) => {
        if (!status.order){
            reject('Issue while generating Order Summary')
        }
        resolve({
            status
        })
    })
}