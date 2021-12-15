console.log("Client side javascript is loaded")
// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })
// fetch("http://localhost:3000/weather?address=hanoi").then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const location = search.value
    fetch("http://localhost:3000/weather?address=" + location).then((response) =>{
        console.log(location)
        response.json().then((data) =>{
            console.log(data)
        })
    })
    console.log('get weather')
})