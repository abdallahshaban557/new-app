const express = require('express');
const router = express.Router();

const user = require('../models/users');

router.get('/users', (req, res, next)=>{
	user.find(function(err, users){
		res.json(users);
	})
});

router.post('/users',(req, res, next)=>{
	let newUser = new user({
		username: req.body.username,
		password: req.body.password
	});
	newUser.save((err,users)=>{
		if(err)
		{
			res.json({msg: 'Failed to add users'});
		}
		else
		{
			res.json({msg: 'users added successfully'})
		}
	});
});

router.delete('/users/:id',(req, res, next)=>{
	users.remove({_id: req.params.id}, function(err,result){
		if(err)
		{
			res.json(err);
		}
		else
		{
			res.json(result);
		}
	});
});




module.exports = router;