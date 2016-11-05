var spawn = require('child_process').spawn;

var compile = spawn('gcc', ['test.c']);

compile.stdout.on('data', function(data){
	console.log('stdout: ' + data);
});

compile.stderr.on('data', function(data){
	console.log(data.toString());
});

compile.on('close', function(data){
	var run = spawn('./a.out', []);
	run.stdout.on('data', function(output){
		console.log(output.toString());
	});
	run.stderr.on('data', function(output){
		console.log(output.toString());
	});
	run.on('close', function(output){
		console.log('stdout: ' + output);
	});
});