//HTTP MODULE
/*
var http = require('http');
http.createServer((req,res)=>{
	//res.write("Hello NodeJs");
	res.write(req.url)
	res.end();
	console.log("Server is Running...")
}).listen(8080)
*/

//FILE SYSTEM MODULE
/*
var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
	fs.readFile('test.txt',(err,data)=>{
		res.write(data);
		res.end();
	}) 

	fs.appendFile('test.txt',' Thank You All', (err,data)=>{
		res.write(data);
		res.end();
	}) 

	fs.writeFile('test.txt', 'Writting content in File', (err,data)=>{
		res.write(data);
		res.end();
	})

	fs.unlink('test.txt',err=>{
		if(err)	throw err ;
		console.log("File deleted..")
	})
}).listen(8080)

*/

//URL MODULE
/*
var url = require('url');
var addr = 'http://localhost:8080/home.html?year=2018&month=feb'
var q = url.parse(addr,true);
console.log(q.search); //q.pathname q.search
 */


//NODEJS NPM           //npm i upper-case
/*var http = require('http');
var uc = require('upper-case');
http.createServer((req,res)=>{
	res.write(uc.upperCase("hello world!"));
	res.end();
}).listen(8080)
*/


//NODEJS EMAIL     //npm i nodemailer
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'palla02323@gmail.com',
		pass:'Palla$0823'
	}
})

var options = {
	from : 'palla02323@gmail.com',
	to: 'palla09523@gmail.com',
	subject:'Testing mail',
	text:'That is easy to use'
}
transporter.sendMail(options,(err,info)=>{
	if(err){
		console.log(err);
	}
	else{
		console.log('Mail sent' + info)
	}
})

