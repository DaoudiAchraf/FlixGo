const rating = require('../Model/rating');
const movies = require('../Model/movie');
const { restart } = require('nodemon');

module.exports.setRate = (req,res,next)=>
{

    const rate = new rating({
      ReviewRating : req.body.rate,
      PostedFor : req.params.movieID,
      createdBy : req.userData.userId
    }).save();
}


module.exports.getUserRate = (req,res,next)=>
{
  const movieId = req.params.id;

  if (req.userData)
  {
      rating.find({PostedFor:movieId,createdBy:req.userData.userId})
  .then((result)=>{
    if(result[0])
    {
      console.log(result);
       res.json(result.reverse()[0].ReviewRating);
    }
    else
      res.json(0);

  });
  }

}

module.exports.getRate = (req,res,next)=>
{

  const movieId = req.params.id;

  rating.find({PostedFor:movieId})
  .then((result)=>{
    let sum = 0;



    result.forEach(element=>
      {
        sum+=element.ReviewRating;

      });

      let rate;
    if(result.length == 0)
        rate = 0;
    else
      rate = sum/result.length;
    res.json(rate);
  });
}


getMovieRate = (movieId,cb)=>
{

  if (movieId)
  {
    rating.find({PostedFor:movieId})
.then((result)=>{
  let sum = 0;

  result.forEach(element=>
    {
      sum+=element.ReviewRating;

    });


    let rate;
  if(result.length == 0)
      rate = 0;
  else
    rate = sum/result.length;
    //console.log(rate);
    cb(rate);
});
  }

}


resta = (result,cb)=>{

  var tab= []; var i =0;
  result.forEach(movie =>{

    getMovieRate(movie._id,movieRate=>{

      i++;

      tab.push({movie:movie.name,Rate:movieRate});

      if(i == result.length)
      cb(tab);


  } );


});

}


// condition

module.exports.getMostRated = (req,res)=>
{

  movies.find()
  .then((result)=>{
    if(result.length > 0)
    {
      let tab =[];
      resta(result,cb=>{

        console.log("++++",cb);

        cb.forEach(element=>{
          if( element.Rate>0)
          {
            tab.push(element);
          }

        });

        console.log(tab);
        res.json(cb);
      });



    }

  });
}

