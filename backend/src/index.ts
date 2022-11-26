import e from 'express';

const server = e();

server.use(e.urlencoded({extended: true}));
server.use(e.json());
server.use(e.static("public", { extensions:['js']}));

server.listen(5000);