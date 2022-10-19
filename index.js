const app = require('./src/app.js');
const mongoose = require('./src/db.js');
const loadUniversities = require('./src/addUniversities.js')

require('dotenv').config()

const {PORT} = process.env

mongoose.connection.once('open',() => {
   mongoose.connection.db.collection('universities').count(async (err,count) => {
    if(count === 0){
        await loadUniversities()
        console.log('Universities loaded')
    }
    else {
        console.log('Universities already loaded')
    }
   })
})
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
})