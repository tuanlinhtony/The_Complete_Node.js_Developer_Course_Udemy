// CRUD create read update delete
// Currently, I am using the MongoDB ver 3.6.23
const {MongoClient, ObjectId } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true} , (error, client) => {
    if(error){
        return console.log('Unable to connect to database' + error)
    }
    console.log('MongoDB connected')
    const db =client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id:0001,
    //     name: 'Olli',
    //     age: 31
    // }, (error, result) =>{
    //     if(error){
    //         console.log('Unable insert to database')
    //     }     
    //     console.log(result.insertedId)      
    // })

    db.collection('admin').insertMany([
        {   
            description: 'test01',
            completed: true
        },
        {   
            description: 'test02',
            completed: false
        },
        {   
            description: 'test03',
            completed: true
        }
    ], (error, result)=> {
        if(error){
            return console.log('Unable to insert document')
        }
        
        async function getItem(insertedIds){
            const filteredDocs = await db.collection('admin').find(insertedIds).toArray()
            return  console.log(filteredDocs)
        }
        
        Object.keys(result.insertedIds).forEach((item) => {
            console.log(item, result.insertedIds[item]);
            getItem(result.insertedIds[item])
        })
        
    })  
    
})

