var Comment = require ('./CommentModel');




module.exports = {
	insert : function (req, res) {
		Comment.findOne({username : req.body.username})
 			.exec(function (error, user) {
	 			
					var newComment = new Comment ({
						text: req.body.text,
			        	postedBy:req.body.user,
			        	tradeWorkerId : req.body.tradeworker,
			        	
					});
					newComment.save(function(err, newComment){
			    		if(err){
			       		 	res.status(500).send(err);
			    		}else{
			    			res.json(newComment)
			    		};
					});

			})
	},
	getAllCommentsByTWID : function (req, res) {
		Comment.find({_id:id}).exec(function (err, allComment) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(allComment);
			}
		});
	}
	
	
}

