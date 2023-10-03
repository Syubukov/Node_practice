const http = require('http');

const server = http.createServer((req, res)=>{
	// console.log(req);
	if(req.url === '/'){
		res.write('This is the home page!');
		res.end();
	}else if(req.url === '/about'){
		res.write('This is the about page!');
		res.end();
	}else {
		res.write(`<h1>This page does not exist</h1>`)
		res.end();
	}
})

server.listen(5000)

