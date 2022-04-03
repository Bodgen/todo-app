const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults(undefined);

server.use(middlewares);
server.use(router);
server.listen(3000,()=>{
    console.log("Server is running")
})