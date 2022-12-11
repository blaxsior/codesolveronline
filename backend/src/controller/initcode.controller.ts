import { db } from "../db/index.db.js";
import { InitCode } from "@prisma/client";
import { Lang } from "../interfaces/input.interface.js";

/**
 * 초기화 코드의 타입
 */
type Iinit = Omit<InitCode, "id" | "type"> & { type: string };

/**
 * 초기화를 위한 코드
 */
const data: Iinit[] = [
    {
        type: "c_cpp", code: `#include <stdio.h>
int main() {
    //코드를 작성하세요
}`},
    { type: "python", code: `def main():\n\tpass\n\t# 코드를 작성하세요\nmain()` },
    {
        type: "javascript", code: `import readline from 'readline';
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
/**
 * 데이터베이스에 초기 코드를 삽입하기 위한 목적의 함수.
 * @returns 삽입된 코드 id[]
 */
const init = async () => {
    return await createInitCodes(data);
}

/**
 * 다수의 초기 코드를 동시에 삽입하기 위한 목적의 함수.
 * @param data 삽입할 초기 코드 목록
 * @returns 삽입된 코드 id[]
 */
const createInitCodes = async (data: Iinit[]) => {
    const result = await db.$transaction(data.map(d => db.initCode.create({ data: d })));
    return result.map(it => it.id);
}


/**
 * 초기 코드를 id를 기반으로 식별하여 삭제하기 위한 함수
 * @param idx 삭제할 초기 코드의 id
 * @returns 삭제한 초기 코드의 id
 */
const deleteInitCodeById = async (idx: number) => {
    const result = await db.initCode.delete({
        where: {
            id: idx
        }
    });

    return result.id;
}

/**
 * 초기 코드의 id를 기반으로 식별하여 삭제하기 위한 함수. 다수의 초기 코드에 대응한다.
 * @param idx 삭제할 초기 코드의 id[]
 * @returns 삭제한 초기 코드의 개수
 */
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