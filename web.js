var dns = require('dns');
var http = require('http');

var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    domain = req['url'].replace(/^\//,'')
    dns.resolve4(domain, function (err, addresses) {
        if (err) {
            res.end(JSON.stringify(err));
        }
        else {
            res.end(JSON.stringify(addresses));
        }
    });
}).listen(port);
