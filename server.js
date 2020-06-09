const express = require('express')
const mongoose = require('mongoose')

const connectMongoDB = async () => {
    const dbUrl = 'mongodb+srv://clusteradmin:ajzc526@rs-cluster-kyvvu.mongodb.net/fackumbrella?retryWrites=true&w=majority';
    try {
        await mongoose.connect(dbUrl, {useNewUrlParser:true})
        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(err.message)
        process.exit(1);
    }
}

// connectMongoDB();

// use express
const app = express();
// endppint
app.use('/api/getCustomers', [], require('./customerController'))  
// port
const PORT = 5001
// listener
app.listen(PORT, () => console.log(`Server is on ${PORT}`))

