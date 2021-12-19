// CRUD create read update delete
// Currently, I am using the MongoDB ver 3.6.23
const { ObjectID } = require('bson')
const {MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true} , (error, client) => {
    if(error){
        return console.log('Unable to connect to database' + error)
    }
    console.log('MongoDB connected')
    const db =client.db(databaseName)
    // // Delete document
    // db.collection('users').deleteMany({
    //     age:160
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // // querry to completed is false in tasks then update many them to true 
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error)=> {
    //     console.log(error)
    // })

    // // Update document
    // db.collection('users').updateOne({
    //     _id: new ObjectId("61bd86b143cd4ed613c7bbc7")
    // }, {
    //     $inc: {
    //         age: 2
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error)=> {
    //     console.log(error)
    // })

    // // querry many result with the condition
    // db.collection('tasks').find({'completed': false}).toArray((error, task) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }else{
    //         console.log(task)
    //     }
    // })

    // // querry many result with the condition then return counts of result
    // db.collection('users').find({'age': 31}).count((error, count) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }else{
    //         console.log(count)
    //     }
    // })

    // // querry only one result with the condition
    // db.collection('users').findOne({'_id':new ObjectID('61bdc2f9f8a5e4d2040ec7ca')},  (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').findOne({'name':'Virgin', 'age' : 1},  (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // // insert only one document to Mongo Database
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Calsi',
    //     age: 29
    // }, (error, result) =>{
    //     if(error){
    //         console.log('Unable insert to database')
    //     }     
    //     const insertDoc = result.insertedId
    //     console.log(result.insertedId)
    //     async function getItem(insertDoc){
    //         const filteredDocs = await db.collection('users').find(insertDoc).toArray()
    //         return  console.log(filteredDocs)
    //     }
    //     getItem(insertDoc)
        
    // })

    // // insert many documents to Mongo Database
    // db.collection('tasks').insertMany([
    //     {   
    //         description: 'Study English',
    //         completed: true
    //     },
    //     {   
    //         description: 'Study French',
    //         completed: false
    //     },
    //     {   
    //         description: 'Study Russian',
    //         completed: true
    //     },
    //     {   
    //         description: 'Study Japanese',
    //         completed: false
    //     },
    //     {   
    //         description: 'Study Chinese',
    //         completed: false
    //     }
    // ], (error, result)=> {
    //     if(error){
    //         return console.log('Unable to insert document')
    //     }

    //     async function getItem(insertedIds){
    //         const filteredDocs = await db.collection('admin').find(insertedIds).toArray()
    //         return  console.log(filteredDocs)
    //     }
        
        // Object.keys(result.insertedIds).forEach((item) => {
        //     console.log(item, result.insertedIds[item]);
        //     getItem(result.insertedIds[item])
        // })
        
    // })  
    
})

