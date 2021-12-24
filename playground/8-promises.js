// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([1,9,8])
//         reject('Something went wrong!')
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log('Success!', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// Promises chaining

const add = (a , b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1,2).then((sum) =>{
    console.log(sum)
    return add(sum, 2)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 3)
}).then((sum3) => {
    console.log(sum3)
    return add(sum3, 1)
}).then((sum4) => {
    console.log(sum4)
}).catch((e) => {
    console.log(e)
})