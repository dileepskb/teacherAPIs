
const City = require("../model/city");
const fetch = require('node-fetch');

//Add New Teacher
const cityCreate = async (req, res) => {
   try {
      const response = await fetch(
         'https://parseapi.back4app.com/classes/india_cities_database?count=1&limit=10000',
         {
           headers: {
             'X-Parse-Application-Id': 'k9wzhXDJckHtuuKmMEm8hceXoCZMvxN4CTijZOjn', // This is the fake app's application id
             'X-Parse-Master-Key': 'EpjKI6bUlgkIbOAAUaDKDFj6x2C3AnsZZJqoa4ak', // This is the fake app's readonly master key
           }
         }
       );
       const data = await response.json(); // Here you have the data that you need
      } catch(e) {}
   
       // this option prevents additional documents from being inserted if one fails
   //  const options = { ordered: true };

   //  const docs = data.results.map(ele => { const data = { cityName: ele.city }; return data });
   
   //  City.insertMany(docs, options).then(result => {

   //    res.status(200).json({
   //       e: `${result.length} documents were inserted`
   //    })
   //  });   
   // } catch (e) {
   //    console.log(e);
   //    res.status(500).json({
   //       e: 'Something went wrong'
   //    })
   // }
 
};


const getAllCities = async (req, res) => {
 City.find({})
  .then(result=>{
     res.status(200).json({
        cities:result,
        count: result.length
     })
  })
  .catch(err=>{
     req.status(500).json({
        error:err
     })
  })
};

const findCity = async (req, res) => {
   City.find({'cityName': {'$regex': req.body.cityName }}, {_id:1, cityName: 1, createdAt: 1 }).sort({ createdAt: 1})
    .then(result=>{
       res.status(200).json({
          cities:result,
          count: result.length
       })
    })
    .catch(err=>{
       req.status(500).json({
          error:err
       })
    })
  };

module.exports = {
  cityCreate,
  getAllCities,
  findCity,
};
