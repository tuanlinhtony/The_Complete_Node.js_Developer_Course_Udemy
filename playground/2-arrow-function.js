// const square = function(x){
//     return x * x
// }

// const square = (x) =>{
//     return x * x
// }

// const square = (x) => x * x
// console.log(square(5))

const event = {
    name: "Birthday Party",
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        // console.log('Guest list for ' + this.name)
        // this.guestList.forEach(function(guest){
        //     console.log(guest + ' is attending ' + this.name)
        // })
        const that = this
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) =>{             //I should research more with this line, especial arrow "=>" is what mean and how use
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()
