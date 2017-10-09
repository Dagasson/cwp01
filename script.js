var fs = require("fs");
var path= process.argv[2];
var content=fs.readFile(`${path}`,"utf8",function(error, data)
{
	//if(error) throw error;
	console.log(data)
}

);

