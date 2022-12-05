import { db } from "../db/index.db.js";
import { InitCode } from "@prisma/client";
import { Lang } from "../interfaces/input.interface.js";

type Iinit = Omit<InitCode, "id" | "type"> & { type: string };

const data: Iinit[] = [
    {
        type: "c_cpp", code: `#include <stdio.h>
int main() {
    //코드를 작성하세요
}`},
    { type: "python", code: `def main():\n\tpass\n\t# 코드를 작성하세요\nmain()` },
    {
        type: "javascript", code: `const readline = require('readline');
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function main() {
    r.on('line', function (line) {
        input.push(line);
        // 문장을 입력받는 경우
        // 여기에 코드를 작성하세요
    })
    .on('close', function () {
        process.exit();
    });
}
main();`}

]

const init = async () => {
    return await createInitCodes(data);
}

const createInitCodes = async (data: Iinit[]) => {
    const result = await db.$transaction(data.map(d => db.initCode.create({ data: d })));
    return result.map(it => it.id);
}

const deleteInitCodeById = async (idx: number) => {
    const result = await db.initCode.delete({
        where: {
            id: idx
        }
    });

    return result.id;
}
const deleteInitCodesById = async (idx: number[]) => {
    const result = await db.initCode.deleteMany({
        where: {
            id: {
                in: idx
            }
        }
    });
    return result.count;
}

export const InitCodeController = {
    init,
    createInitCodes,
    deleteInitCodeById,
    deleteInitCodesById
};