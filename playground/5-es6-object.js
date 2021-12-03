// const name = "Tony"
// const userAge = 31
// const user = {
//     name,
//     age: userAge,
//     location: 'Ha noi'
// }

// console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// What am I doing? 
// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
   console.log(type, label, stock)
}

transaction('order', product)