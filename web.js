var dns = require('dns');
var http = require('http');

var port = process.env.PORT || 5000;

var methods = {
    A: dns.resolve4,
    AAAA: dns.resolve6,
    MX: dns.resolveMx,
    TXT: dns.resolveTxt,
    SRV: dns.resolveSrv,
    NS: dns.resolveNs,
    CNAME: dns.resolveCname
};

http.createServer(function (req, res) {
    var type = req.url.split("/")[1];
    var domain = req.url.split("/")[2];
    var f = methods[type];

    res.writeHead(200, {'Content-Type': 'application/json'});

    if (typeof f === "undefined") {
        res.end("Error: invalid DNS record type");
        return;
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
