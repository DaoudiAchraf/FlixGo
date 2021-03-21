
const user = require('../Model/users');
const reservations = require('../Model/reservation');
const Ratings = require('../Model/rating');
const rating = require('../Model/rating');

module.exports.accountsNumber = (req,res,next)=>
{ console.log('heee');
  user.find().then((users)=>{
    let Visitors=0,Producers=0,Moderators=0;

      users.forEach((user)=>{
        if (user.role === 'Visitor')
          Visitors++;
        else if(user.role === 'Producer')
          Producers++;
        else
          Moderators++;
      });
      res.json({Visitors:Visitors,Producers:Producers,Moderators:Moderators});
  });
}

module.exports.reservationsPerfilm = (req,res)=>{
  console.log('ai');
    reservations.aggregate([  {
      $group: {
         _id: "$film",
         count: { $sum: 1 }
      }
    }]).then(result=>{res.json(result);});
}




