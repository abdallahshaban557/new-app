const express = require('express');
//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = '../uploads/';


const router = express.Router();

const Image = require('../models/image');

var upload = multer({dest: DIR}).single('photo');

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

router.post('/fileupload', function (req, res, next) {
    var path = '';
    upload(req, res, function (err) {
       if (err) {
         // An error occurred when uploading
         console.log(err);
         return res.status(422).send("an Error occured")
       }  
      // No error occured.
       path = req.file.path;
       return res.send("Upload Completed for "+path); 
 });  

module.exports = router;