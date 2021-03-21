// const Movie = require('../Model/movie');
// const fs = require('fs');

// module.exports.getMovies = (req, res, next) => {
// 	Movie.find().then((movies) => {
// 		res.send(movies);
// 	});
// };

// module.exports.getMoviesByUser = (req, res, next) => {
// 	Movie.find({ creator: req.userData.userId }).then((movies) => {
// 		res.send(movies);
// 	});
// };

// module.exports.deleteMovie = (req, res, next) => {
// 	Movie.findById(req.params.id).then((movie) => {
// 		fs.unlink('./images' + movie.file, (err) => {
// 			if (err) {
// 				console.error(err);
// 			}
// 		});
// 	});
// 	Movie.deleteOne({ _id: req.params.id }, function(err, movie) {
// 		if (err) {
// 			res.send(err);
// 		} else {
// 			res.send(movie);
// 		}
// 	});
// };

// module.exports.updateMovie = (req, res, next) => {
// 	console.log(req.file);
// 	Movie.findOne({ _id: req.body.id }).then((movie) => {
// 		if (movie) {
// 			if (req.body.name) movie.name = req.body.name;
// 			if (req.body.cat) movie.category = req.body.cat;
// 			if (req.body.desc) movie.desc = req.body.desc;
// 			if (req.body.duration) movie.duration = req.body.duration;
// 			if (req.body.prodName) movie.prodName = req.body.prodName;
// 			if (req.body.type) movie.type = req.body.type;
// 			if (req.file.filename) {
// 				fs.unlink('../images' + movie.file, (err) => {
// 					if (err) {
// 						console.error(err);
// 					}
// 				});
// 				movie.file = req.file.filename;
// 			}
// 			movie.save();
// 		}
// 	});
// };

// module.exports.upload = (req, res, next) => {
//   let url = req.protocol+ "://"+ req.get("host");
// 	Movie.findOne({ name: req.body.name }).then((movie) => {
// 		if (movie) {
// 			console.log('movie_exist');
// 		} else {
// 			console.log(req.userData.userId);
// 			// console.log("enter" + req.body);
// 			const movie = new Movie({
// 				name: req.body.name,
// 				type: req.body.type,
// 				desc: req.body.desc,
// 				file: url+'/images/'+req.file.filename,
// 				duration: req.body.duration,
// 				rating: 0,
// 				prodName: req.body.prodName,
// 				category: req.body.cat,
// 				creator: req.userData.userId
// 			});

// 			//  console.log("movie =" + movie);

// 			movie.save((err, movie) => {
// 				if (movie) {
// 					//  console.log("ok");
// 					res.send({ id: movie._id, image: movie.file });
// 				} else console.log(err);
// 			});
// 		}
// 	});
// };



const Movie = require('../Model/movie');
const fs = require('fs');
let url = "";

module.exports.getMovies = (req, res, next) => {
  Movie.find().then((movies) => {
    res.send(movies);
  });
};

module.exports.getMoviesByUser = (req, res, next) => {
  Movie.find({
    creator: req.userData.userId
  }).then((movies) => {
    res.send(movies);
  });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.id).then((movie) => {
    fs.unlink('../images' + movie.file, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });

  Movie.deleteOne({
      _id: req.params.id
    },
    function (err, movie) {
      if (err) {
        res.send(err);
      } else {
        res.send(movie);
      }
    }
  );
};

module.exports.updateMovie = (req, res, next) => {
  console.log(req.file);
  Movie.findOne({
    _id: req.body.id
  }).then((movie) => {
    if (movie) {
      if (req.body.name) movie.name = req.body.name;
      if (req.body.cat) movie.category = req.body.cat;
      if (req.body.desc) movie.desc = req.body.desc;
      if (req.body.duration) movie.duration = req.body.duration;
      if (req.body.prodName) movie.prodName = req.body.prodName;
      if (req.body.type) movie.type = req.body.type;
      if (req.body.price) movie.price = req.body.price;
      if (req.body.trailer) movie.trailer = req.body.trailer;
      if (req.file && req.file.filename) {
        fs.unlink('../images' + movie.file, (err) => {
          if (err) {
            console.error(err);
          }
        });
        movie.file = req.file.filename;
      }
      movie.save();
      res.send(movie);
    }
  });
};

module.exports.upload = (req, res, next) => {
  url = req.protocol + "://" + req.get("host");
  console.log(url);
  Movie.findOne({
    name: req.body.name
  }).then((movie) => {
    if (movie) {
      console.log('movie_exist');
    } else {
      const movie = new Movie({
        name: req.body.name,
        type: req.body.type,
        desc: req.body.desc,
        file: url + "/images/" + req.file.filename,
        duration: req.body.duration,
        price: req.body.price,
        trailer: req.body.trailer,
        rating: 0,
        prodName: req.body.prodName,
        category: req.body.cat,
        creator: req.userData.userId
      });

      movie.save((err, movie) => {
        if (movie) {
          //  console.log("ok");
          res.send({
            id: movie._id,
            image: movie.file
          });
        } else console.log(err);
      });
    }
  });
};
