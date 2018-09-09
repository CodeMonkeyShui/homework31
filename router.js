app.get('/new',function(req, res){
	var pageIndex = req.query.page
	var len = req.query.length
	var obj = {brif: '内容'}
	var arr = []
	for(var i =0; i< len; i++){
		obj.brif += (parseInt(pageIndex)+i+1)
		arr.push(obj)
		obj = {brif: '内容'}
	}
	res.send({
		status: 0,
		data: arr
	})
})