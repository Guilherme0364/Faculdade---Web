const fs = require('fs')

fs.readFile.stringfy(('arquivo.txt', (err,data) => {
    if(err){
        console.log(err)
    } else{
        console.log(data)
    }
}))