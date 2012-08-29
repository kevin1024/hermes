# Hermes

This is just a tiny nodejs server that proxies DNS A record lookups over HTTP

## Usage

Pass the domain for which you want the A record as the path.  Example:

`http://yourhermes.herokuapp.com/www.reddit.com` returns `["69.31.16.160","69.31.16.171"]`

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

