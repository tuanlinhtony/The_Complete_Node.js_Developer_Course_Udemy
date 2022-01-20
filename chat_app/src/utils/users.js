const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room}) => {
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if(!username || !room){
        return {
            error : 'Username and room are required'
        }
    }

    //Check for existing user
    const exisingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if(exisingUser) {
        return {
            error: 'Username is in use'
        }
    }

    // Store user
    const user = { id, username, room}
    users.push(user)
    return {user}
}
const removeUser = () => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

addUser({
    id: 22,
    username: 'Tony',
    room: 'Manila'
})

console.log(users)

const res = addUser({
    id: 33,
    username: '',
    room: ''
})

console.log(res)
const removeUser = removeUser(22)

console.log(removeUser)
console.log(users)