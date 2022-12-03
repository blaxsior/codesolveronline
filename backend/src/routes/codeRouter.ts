import {RequestHandler, Router} from 'express';

const sendData : RequestHandler = (req, res, next) => {
    console.log(req.body);
    return res.send(req.body);
}

export const codeRouter = Router();
codeRouter.post('/', sendData);
codeRouter.get('/',(req,res,next) =>{
    res.send("hello!");
})