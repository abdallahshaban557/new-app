const express = require('express');
var multer = require('multer');
// set the directory for the uploads to the uploaded to
 
const router = express.Router();


var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'uploads/')
	},
	filename: function (req, file, cb) {
	  cb(null, file.fieldname + '-' + Date.now() + '.jpg')
	}
  });
  
  var upload = multer({ storage: storage }).single('imageupload');

router.post('/imageupload', function(req, res){
	upload(req, res, function(err){
		if (err)
			console.log(err);
	})
	res.json({
		success: true,
		message: 'Image Uploaded!'
	})
});



const Image = require('../models/image');

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



module.exports = router;