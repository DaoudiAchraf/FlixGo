const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const upload = require('./routes/upload');
const movie = require('./routes/movie');
var userController = require('./Controller/userController.js');
var mailController = require('./Controller/mailController.js');
var filmController = require('./Controller/films.js');
var CommentController = require('./Controller/Comment.js');
var reviewController = require('./Controller/review.js');
var bookingController = require('./Controller/bookings.js');
var reservationController = require('./Controller/reservationController.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//----------------AMASUO : show users in dashboard---------------
require('./Model/users');
const expressHandlebars = require('express-handlebars');

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
const UserController = require('./Controller/users');

// app.set('views', path.join(__dirname, '/views/'));
app.set('views', path.join(__dirname, '/views/'));

app.engine(
	'hbs',
	expressHandlebars({
		extname: 'hbs',
		defaultLayout: 'mainlayout',
		layoutsDir: __dirname + '/views/layouts'
	})
);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.render('index', {});
});

app.use('../src/assets/img/covers', express.static(path.join('../src/assets/img/covers')));



const auth = require('./routes/auth');
app.use(cors(), auth);
app.use('/users', UserController);
app.use('/mail', mailController);
app.use('/films', filmController);
app.use('/Comments', CommentController);
app.use('/reviews', reviewController);
app.use('/bookings', bookingController);
app.use('/reservation', reservationController);

//----------------AMASUOend---------------

//----------------File Picker using Multer---------------

const bcrypt = require('bcrypt');

//----------------------------------------------------------

//--------------SessionConf-------------------------------------------------
//app.use(session({secret:'my secret',resave:false,saveUninitialized:false}));
//--------------------------------------------------------------------------

//-------------------- Routes ------------------------

const analytics = require("./routes/analytics");
app.use(cors(), analytics);


const multer = require("multer");
app.use('/images',express.static(__dirname+'/images'));
const storage = multer.diskStorage({

	destination: (req, file, cb) => {
		cb(null, './images');
	},
	filename: (req, file, cb) => {
		cb(null, new Date().getTime().toString() + '_' + file.originalname);
	}
});



const Security = require('./Controller/router_protector');
const bookings = require('./routes/bookings');

app.get('/ac', Security.isAuth4Booking, (req, res, next) => {
	const permission = ac.can('Admin').execute('create').execute('update').sync().on('video');
	res.send(permission.granted);
});

app.use(cors(), movie);
const rating = require("./routes/rating");
app.use(cors(),rating);



app.use(cors(), Security.checkAuth, multer({ storage: storage }).single('file'), upload);
app.use('/Users', userController);
app.use(express.static(__dirname + '/images'));
app.use(cors(),bookings);



//-----------------------------------------

//-----------Privileges---------------

// ac.grant('Create')
//     .execute('Create').on('video')

// ac.grant('Update')
//     .execute('delete').on('video')

// ac.grant('Delete')
//     .execute('delete').on('video')

// ac.grant('Delete')
//     .execute('delete').on('video')

////////////////////////////////////////////////////////////

mongoose
	.connect('mongodb+srv://Admin:aoaj@auth-cluster-t0gpd.mongodb.net/test?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then((result) => {
		app.listen(3000);
	})
	.catch((err) => {
		console.log(err);
	});

/////////////////////////////////////////////////////////////
