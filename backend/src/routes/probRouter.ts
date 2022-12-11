import { RequestHandler, Router } from 'express';
import { IProbInput, IPSInput } from '../interfaces/input.interface';
import { ProblemController } from '../controller/problem.controller.js';
import { ScoringProvider } from '../scoring/ScoringProvider.js';
import { TestcaseController } from '../controller/testcase.controller.js';

/**
 * 문제를 만드는데 사용되는 경로
 */
const createProblem: RequestHandler = async (req, res, next) => {
    const data = req.body as IProbInput;

    const result = await ProblemController.createProblem(data);
    if (result) {
        return res.send("success!");
    }
    else {
        return res.status(400).send('잘못된 입력입니다.');
    }
}

/**
 * 문제 목록(list)을 얻는데 사용되는 경로
 */
const getProblems: RequestHandler = async (req, res, next) => {
    let pno = parseInt(req.params['pno'] ?? "0");
    if (isNaN(pno)) {
        pno = 0;
    }

    const list = await ProblemController.getProblemList(pno);
    return res.send(list);
}

/**
 * solve 페이지에서 특정 문제 및 초기 코드를 얻기 위한 경로
 */
const getProblem: RequestHandler = async (req, res, next) => {
    const id = parseInt(req.params['id']);
    if (isNaN(id)) {
        return res.status(400).send("문제의 id가 잘못됨");
    }
    const problem = await ProblemController.getProblemById(id);

    if (problem === null) {
        return res.status(400).send("존재하지 않는 문제");
    }
    return res.send(problem);
}

/**
 * 문제를 채점하는데 사용되는 경로
 */
const scoreCode: RequestHandler = async (req, res, next) => {
    const data = req.body as IPSInput;
    const codeManager = ScoringProvider(data.type);

    if (!codeManager) {
        return res.send({ message: "지원되지 않는 언어입니다." });
    }

    const success = await codeManager.init(data.code);
    if (!success) {
        return res.send({ message: "컴파일 실패." });
    }

    const id = parseInt(data.id??"");
    if (isNaN(id))
    {
        await codeManager.exit();
        return res.send({message: "문제의 번호가 잘못되었습니다."})
    }

    const testcases = await TestcaseController.getTestcasesByPid(id);
    if (testcases.length === 0) {
        await codeManager.exit();
        return res.send({ message: "존재하지 않는 문제입니다." });
    }

    const re_arr: boolean[] = [];

    for (let tc of testcases) {
        const result = await codeManager.run(tc);
        re_arr.push(result);
    }
    const count = re_arr.filter(it => it === true).length;
    if (count === re_arr.length) {
        await codeManager.exit();
        return res.send({ message: "성공입니다!" });
    }
    else {
        await codeManager.exit();
        return res.send({ message: "실패입니다!" });
    }
}

const probRouter = Router();

probRouter.get('/problem/:id', getProblem);
probRouter.get('/list/:pno', getProblems);
probRouter.post('/create', createProblem);
probRouter.post('/score', scoreCode);

probRouter.post('/test', (req, res, next) => {
    console.log(req.body);
    return res.send(req.body);
});

probRouter.get('/', (req, res, next) => {
    res.send("hello!");
});



export default probRouter;