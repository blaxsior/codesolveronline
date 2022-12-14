import e from 'express';
import { db } from './db/index.db.js';
import cors from 'cors';
import probRouter from './routes/probRouter.js';

const server = e();

server.use(cors());
server.use(e.json());
server.use(e.static("public", { extensions:['js']}));
server.use(e.urlencoded({extended: true}));

try {
    await db.$connect();
}
catch(err){
    console.error("[error] can't connect to database... check again.");
    console.error(`[error] ${err}`)
}

server.use((req,res,next) => {
    console.log(req.originalUrl);
    next();
})

server.use('/p', probRouter);


server.use('*', (req,res,next) =>{
    res.send("error!");
})

server.listen(5000);