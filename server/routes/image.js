const express = require('express');
<<<<<<< HEAD
//require multer for the file uploads
var multer = require('multer');
var app = express();
// set the directory for the uploads to the uploaded to
var DIR = './uploads/';
 
 
=======
>>>>>>> parent of ce12a675... added mutler code
const router = express.Router();

const Image = require('../models/image');

<<<<<<< HEAD
var upload = multer({dest: DIR});

=======
>>>>>>> parent of ce12a675... added mutler code
router.get('/image', (req, res, next)=>{
	Image.find(function(err, resultimage){
		res.json(resultimage);
	})
});


router.post('/image',(req, res, next)=>{
	let newImage = new Image({
		caption: req.body.caption,
		url: req.body.url
	});
	newImage.save((err,resultimage)=>{
		if(err)
		{
			res.json({msg: 'Failed to add image'});
		}
		else
		{
			res.json({msg: 'image added successfully'})
		}
	});
});

<<<<<<< HEAD

app.use(multer({
	dest: DIR,
	rename: function (fieldname, filename) {
	  return filename + Date.now();
	},
	onFileUploadStart: function (file) {
	  console.log(file.originalname + ' is starting ...');
	},
	onFileUploadComplete: function (file) {
	  console.log(file.fieldname + ' uploaded to  ' + file.path);
	}
  }));


router.post('/fileupload', function (req, res, next) {
    var path = '';
    upload(req, res, function (err) {
       if (err) {
         // An error occurred when uploading
         console.log(err);
         return res.status(422).send("an Error occured")
       }  
      // No error occured.
       //path = req.file.path;
       return res.send("Upload Completed for "); 
 })});  
=======
>>>>>>> parent of ce12a675... added mutler code

module.exports = router;