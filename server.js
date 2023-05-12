const ronin = require('ronin-server')
const mocks = require('ronin-mocks')

const server = ronin.server()

server.use('/', mocks.server(server.Router(), false, true))
console.log("Just testing....")
//server.start()
//console.log("Server started.....")
//server.
//console.log("Server stopped....")