const express = require('express');
const router = express.Router();

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