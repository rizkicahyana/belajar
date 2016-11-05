var runner = require('child_process');

var location = '/opt/lampp/htdocs/compile/output.php';

var arg = "Hello, World!";

runner.exec('php ' + location + ' ' + arg, function(error, stdout, stderr){
	if(error){
		console.log(error);
	}
	console.log(stdout);
});