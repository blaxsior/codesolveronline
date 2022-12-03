import e from 'express';
import { db } from './db/index.db.js';
import { ScoringProvider } from './scoring/ScoringProvider.js';

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

const code = `#include <stdio.h>
int main() {
    printf("hello");
}`;

const code2 = "console.log('hello');";


const sp = ScoringProvider('javascript')!;
await sp.init(code2);
const success = await sp.run({output:"hello\n",type: true});
console.log("success is ", success);
await sp.exit();


server.listen(5000);