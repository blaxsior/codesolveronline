import { Problem, TestCase } from "@prisma/client";

/**
 * 테스트케이스에 대한 인터페이스
 */
export interface ITestCase {
    input?: string;
    output: string;
    type: string;
}

/**
 * 사용자가 문제 만들 때의 입력
 */
export interface IProbInput {
    title: string;
    description: string;
    testcases: ITestCase[]
}

/**
 * 사용자가 코드 post할 때 정보
 */
export interface IPSInput {
    id: string;
    code: string;
    type: Lang|string
}

/**
 * 지원하는 언어
 */
export type Lang = 'c_cpp'|'javascript'|'python';