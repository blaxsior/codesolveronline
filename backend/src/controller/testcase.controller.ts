import { db } from '../db/index.db.js';

/**
 * 특정 문제의 pid을 받아 존재하는 테스트케이스를 반환하는 함수.
 * @param pid 대상이 되는 문제의 id 값
 * @returns 
 */
const getTestcasesByPid = async (pid: number) => {
    const result = await db.testCase.findMany({
        where: {
            pid: pid
        }
    });

    return result;
}

export const TestcaseController = {
    getTestcasesByPid,
};