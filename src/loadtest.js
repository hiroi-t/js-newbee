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

	if(fs.existsSync(source)){
		text_source = fs.readFileSync(source, 'utf-8');
		text_source = text_source + ('Appendix')
		fs.writeFileSync(dest, text_source)
	}else{
		console.log("◆ERROR◆ source file is not found");
	}

	console.log(text_source);
}

main();
