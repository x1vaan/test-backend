const {Router} = require('express');
const University = require('../models/University.js')

const router = Router();

router.get('/universities', async (req,res) => {
    try {
        const {country} = req.query
        const {page} = req.query
        if(country){
          const universitiesFilteredByCountry = await University.find({country: country}).select('_id name country state-province')
         return res.status(200).json(universitiesFilteredByCountry)
        }
        const totalUniversities = await University.count();
        const totalPages = Math.ceil(totalUniversities / 20) 

        if(page > totalPages) {
            const list = await University.find().skip(totalPages).limit(20)
            return res.status(200).json({list, information: {totalUniversities,totalPages, currentPage: totalPages}})
        }

        let skipIndex = page? page * 20 : 1 * 20
        let index = skipIndex - 20
       const list = await University.find().skip(index).limit(20)

      res.status(200).json({list, information: {totalUniversities, totalPages,currentPage: page}});
    } catch (error) {
        res.status(500).send(error.message)
    }
});

router.get('/universities/:id', async(req,res) =>{
    try {
        const _id  = req.params.id
       const university = await University.findById(_id)
       res.status(200).json(university)  
    } catch (error) {
        res.status(500).send(error.message)
    }
});


router.put('/universities/:id', async (req,res)=>{
    try {
        const _id = req.params.id
        const {name, domains, web_pages} = req.body
        await University.updateOne({_id : _id},{
           name : name,
           $push: {
               domains: domains,
               web_pages: web_pages
           }
        })
         res.status(200).send('University updated succesfully')
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