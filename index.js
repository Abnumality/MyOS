const fs = require('fs')
const http = require('http')
const nodeStatic = require('node-static')

const public = new nodeStatic.Server('./public')

http.createServer(function (req, res) {
    public.serve(req, res)
}).listen(80)