# Hermes

This is just a tiny nodejs server that proxies DNS record lookups over HTTP

## Usage

URLS take 2 parameters: The type of record you want to look up, and the domain to look up the record for. Examples:

`http://yourhermes.herokuapp.com/A/www.reddit.com` returns `["69.31.16.160","69.31.16.171"]`
`http://yourhermes.herokuapp.com/A/www.realgeeks.com` returns `["ns.rackspace.com","ns2.rackspace.com"]`

Responses are all in json.  If there is an error, it is returned as a json object that looks like this:

```json
{"code":"ENOTFOUND","errno":"ENOTFOUND","syscall":"queryA"}
```

## Deploying

Hermes is intended to be deployed on heroku.  Install the heroku toolkit and then:

```
$ heroku login
$ heroku create
$ git push heroku master
$ heroku ps:scale web=1
```

## Error Codes
Here are the error codes, stolen from the [nodejs docs](http://nodejs.org/api/dns.html)
  * dns.NODATA: DNS server returned answer with no data.
  * dns.FORMERR: DNS server claims query was misformatted.
  * dns.SERVFAIL: DNS server returned general failure.
  * dns.NOTFOUND: Domain name not found.
  * dns.NOTIMP: DNS server does not implement requested operation.
  * dns.REFUSED: DNS server refused query.
  * dns.BADQUERY: Misformatted DNS query.
  * dns.BADNAME: Misformatted domain name.
  * dns.BADFAMILY: Unsupported address family.
  * dns.BADRESP: Misformatted DNS reply.
  * dns.CONNREFUSED: Could not contact DNS servers.
  * dns.TIMEOUT: Timeout while contacting DNS servers.
  * dns.EOF: End of file.
  * dns.FILE: Error reading file.
  * dns.NOMEM: Out of memory.
  * dns.DESTRUCTION: Channel is being destroyed.
  * dns.BADSTR: Misformatted string.
  * dns.BADFLAGS: Illegal flags specified.
  * dns.NONAME: Given hostname is not numeric.
  * dns.BADHINTS: Illegal hints flags specified.
  * dns.NOTINITIALIZED: c-ares library initialization not yet performed.
  * dns.LOADIPHLPAPI: Error loading iphlpapi.dll.
  * dns.ADDRGETNETWORKPARAMS: Could not find GetNetworkParams function.
  * dns.CANCELLED: DNS query cancelled.


