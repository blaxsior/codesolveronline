import { db } from '../db/index.db.js';

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