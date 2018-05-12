/*
3.
Write a function that creates an object that represent a computer program. 
Each program is described by: description,  programming language, git repository, 
boolean status that says if the program is completed or not. Add a method that prints out 
program’s repository,  a method that checks if the program is written in 
JavaScript as well as a method that checks if program is completed or not.
*/

function myProgram(description, programLanguage, git, status) {
    var program = {
        description: description,
        programLanguage: programLanguage,
        git: git,
        status: status
    }

    program.checksGit = function() {
        return program.git;
    }

    program.checkLanguage = function() {
        return program.programLanguage === "JS" ? true : false;

    }
    program.checkStatus = function() {
        return program.status === "complited" ? true : false;
    }

    return program;
}

var myJsProgram = myProgram("javascript", "JS", "nikola-lucic", "complited");

console.log(myJsProgram);
console.log(myJsProgram.checksGit());
console.log(myJsProgram.checkLanguage());
console.log(myJsProgram.checkStatus());

var myPhpProgram = myProgram("Php", "Php", "nikola-lucic", "not complited")

console.log(myPhpProgram);
console.log(myPhpProgram.checksGit());
console.log(myPhpProgram.checkLanguage());
console.log(myPhpProgram.checkStatus());