const University = require('./models/University.js');
const axios = require('axios');

 module.exports = async function getUniversities () {
    try {
    const countries = ["argentina","brasil","chile","colombia","paraguay","peru","suriname","uruguay"];
    let universities = []
    for(country of countries){
   const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`)
     universities.push(response.data)
    }
   universities = universities.flat()
    await University.insertMany(universities)
    } catch (error) {
        console.log(error.message)
    }
}
