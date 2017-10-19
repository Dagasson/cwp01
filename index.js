const fs = require('fs');
const path=require('path');
let pat= process.argv[2];
let copyright;

copyright=JSON.parse(fs.readFileSync("./cop.json"));

let script='console.log("Kekus"); \n'+
    'console.log("double kekus");'


if(pat)
{
	fs.stat(pat,function (error, statistics) {
		if(error){console.log('Ошибка пути');}
		else{
			//watchDir(pat)

                fs.writeFile(pat+'\\Summary.js', script, function (error) {
                        if (error) console.log('Ошибка создания файла.');
                        else console.log('Summary создан.');
                    }
                );

		}
    })
}



//let content=fs.readFile(`${path}`,"utf8",function(error, data)
//	{
  //      console.log(data)
 //   }
//);
