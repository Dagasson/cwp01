const fs = require('fs');
const path=require('path');
let pat= process.argv[2];
let copyright;

copyright=JSON.parse(fs.readFileSync("./cop.json"));

let script='const fs = require(\'fs\');\n' +
    'const path = require(\'path\');\n' +
    '\n' +
    '(function getFiles(baseDir) {\n' +
    '    fs.readdir(baseDir, function (err, files){\n' +
    '        for (let i in files) {\n' +
    '            let currentDir = baseDir + path.sep + files[i];\n' +
    '            fs.stat(currentDir, (err, stats) => {\n' +
    '                    if (stats.isDirectory()) {\n' +
    '                        getFiles(currentDir);\n' +
    '                    } else {\n' +
    '                        console.log(path.relative(__dirname, currentDir));\n' +
    '                    }\n' +
    '                }\n' +
    '            );\n' +
    '        }\n' +
    '    });\n' +
    '})(__dirname, null);\n';


if(pat)
{
	fs.stat(pat,function (error, statistics) {
		if(error){console.log('Ошибка пути');}
		else{
			//watchDir(pat)
            create_summary(pat);

		}
    })
}

function create_summary(pat)
{
    fs.writeFile(pat+'\\Summary.js', script, function (error) {
        if (error) console.log('Ошибка создания файла.');
        else console.log('Summary создан.');
        }
    );
}

function get_last_part(pat)
{
    let last_part=path.basename(pat);
    return last_part;
}

//let content=fs.readFile(`${path}`,"utf8",function(error, data)
//	{
  //      console.log(data)
 //   }
//);
