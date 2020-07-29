var inquirer = require('inquirer');
var fs = require('fs');

inquirer.prompt([
    {
        type: 'list', 
        message:'Your favorite book?',
        name: 'Books',
        choices: ["Math","History","Physics"]
    }
])
.then(answers=>{
    console.log('----Creating your repository-----');
    fs.writeFile('readme.md','Project framework:'+answers.Books,function(err){
        if(err) return console.log(err);
        console.log('----Readme file created----');
    })
    console.log(answers);

    inquirer.prompt([
        {
            type:'input',
            message:'\n Enter title \n',
            name: 'Project',
            console:'Enter title'
        }
    ]).then(answers=>{
        console.log(answers);
        fs.appendFile('./readme.md','\n Project titl: '+answers.Project,function(err){
            if(err) return console.log(err);
            console.log('----Readme file created----');
        })
    })
});