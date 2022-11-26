import e from 'express';
import { db } from './db/index.db';

const server = e();

server.use(e.urlencoded({extended: true}));
server.use(e.json());
server.use(e.static("public", { extensions:['js']}));


try {
    await db.$connect();
}
catch(err){
    console.error("[error] can't connect to database... check again.");
    console.error(`[error] ${err}`)
}

server.listen(5000);