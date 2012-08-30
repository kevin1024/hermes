var dns = require('dns');
var http = require('http');

var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
    var f;
    var type = req.url.split("/")[1];
    var domain = req.url.split("/")[2];

    res.writeHead(200, {'Content-Type': 'application/json'});
    if (type === 'NS') {
        f = dns.resolveNs;
    } else {
        f = dns.resolve4;
    }
    f(domain, function (err, addresses) {
        if (err) {
            res.end(JSON.stringify(err));
        }
        else {
            res.end(JSON.stringify(addresses));
        }
    });
}).listen(port);
