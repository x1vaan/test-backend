const {Router} = require('express');
const University = require('../models/University.js')

const router = Router();

router.get('/universities', async (req,res) => {
    try {
        const {country} = req.query
        if(country){
          const universitiesFilteredByCountry = await University.find({country: country}).select('_id name country state-province')
         return res.status(200).json(universitiesFilteredByCountry)
        }

       const list = await University.find().skip().limit()

    } catch (error) {
        res.status(500).send(error.message)
    }
});

router.get('/universities/:id', async(req,res) =>{
    try {
        const _id  = req.params.id
       const university = await University.findOne({_id})
       res.status(200).json(university)  
    } catch (error) {
        res.status(500).send(error.message)
    }
});

router.post('/universities', async(req,res)=>{
    try {
        const {name,country,alpha_two_codes,web_pages,domains,state_province} = req.body
        await University.create({name,country,alpha_two_codes,web_pages,domains, 'state-province': state_province});
        res.status(200).send('University added')
    } catch (error) {
        res.status(500).send(error.message)
    }
});


router.delete('/universities/:id', async(req,res)=>{
    try {
        const {id} = req.params
        await University.deleteOne({_id : id})
        res.status(200).send('University deleted succesfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router