import { db } from '../db/index.db.js';
import { IProbInput } from '../interfaces/input.interface.js';


/**
 * solve 페이지에서 요청할 함수  
 * problem에 초기 코드를 담아서 보낸다.
 * @param id 문제의 id
 * @returns problem 및 초기 코드
 */
const getProblemById = async (id: number) => {
    const problem = await db.problem.findUnique({
        where: {
            id: id
        },
        include: {
            initCodes: true
        }
    });

    return problem;
}

/**
 * 코드 생성 페이지에서 사용할 함수.  
 * 프로그램 및 테스트케이스 정보를 받는다.  
 * 차후 필요한 경우 problem을 추가할 예정이다.
 * @param prob 문제 및 테스트케이스 더미 (/creating에서 만듬)
 * @returns 프로그램이 잘 생성되었는지...
 */
const createProblem = async (prob: IProbInput) => {
    const testcases = prob.testcases.map(it => {
        let type = false;
        if(it.type ==='true')
        {
            type = true;
        }
        return {...it, type};
    });

    const problem = await db.problem.create({
        data: {
            title: prob.title,
            description: prob.description,
            tests: {
                create: testcases
            },
            initCodes: {
                connect: [
                    {id: 1},
                    {id: 2},
                    {id: 3}
                ]
            }
        }
    });
    return problem !== null;
}

/**
 * 유저가 선택한 페이지 번호에 대해 개수를 지정한다.
 * @param p_num 유저가 선택한 페이지 번호.
 * @param l_list 한번에 보여주는 리스트의 길이
 * @returns 
 */
const getProblemList = async (p_num: number, l_list = 10) => {
    const problemBasics = await db.problem.findMany({
        select: {
            id: true,
            title: true
        },
        // 앞 페이지의 문제 리스트는 스킵.
        skip: p_num*l_list,
        take: l_list
    });

    return problemBasics;
}

export const ProblemController = {
    getProblemById,
    createProblem,
    getProblemList
};

