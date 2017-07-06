const fs = require("fs");

var dest = './datas/data2.txt';
var source = './datas/data1.txt';

var main = function(){
	if(fs.existsSync(dest)){
		console.log('unlink start');
		fs.unlinkSync(dest);
	}else{
		console.log("false");
	} 
	
	var text_source;

	new Promise(function(onFulfilled, onRejected){
		fs.readFile(source, function(err, data){
			if(err){
				onRejected(err);
			}else{
				console.log(data.toString());
				onFulfilled(data.toString());
			}
		})
	})
	.then(function(data){
		fs.writeFileSync(dest, data.toString() + "Appendix");
		console.log(data);
	}, function(err){
		console.log("Oops Something Wrong!!");
	});

}

main();
