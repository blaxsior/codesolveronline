import { exec } from "child_process";
import { randomBytes } from "crypto";
import { resolve } from "path";
import { ITestCase } from "../interfaces/db.interface.js";

// import {promisify} from 'util';

export interface ISManagerInputParams {
    extension: string,
    run: (path: string, id: string) => string,
    onCompile?: (path: string, id: string) => string,
    onExit?: (path: string, id: string) => string,
}

export class ScoringManager {
    private static readonly temp_dir = resolve('temp'); // C 파일등이 임시로 저장되는 위치
    // 차후 반드시 constructor에서 초기화해야 함!
    private readonly id: string;
    private readonly extension: string;

    private readonly run_str: string;
    private readonly compile_str?: string;
    private readonly exit_str?: string;

    constructor({ extension, run, onCompile, onExit }: ISManagerInputParams) {
        this.id = ScoringManager.getRandFileId();
        this.extension = extension;

        this.run_str = run(ScoringManager.temp_dir, this.id);
        this.compile_str = onCompile?.(ScoringManager.temp_dir, this.id);
        this.exit_str = onExit?.(ScoringManager.temp_dir, this.id);
    }

    /**
     * 
     * @returns 파일에 대한 랜덤 이름 생성
     */
    private static getRandFileId() {
        return randomBytes(12).toString('hex');
    }

    /**
     * 코드, 확장자가 주어지면 생성 코드를 만든다.
    //  * @param code 사용자의 코드
    //  * @param extension 사용자의 입력
    //  * @returns 성공 여부
     */
    private createCodeFile(code: string, timeout: number = 3000): boolean {
        let success = true;
        exec(`cat > ${ScoringManager.temp_dir}/${this.id}.${this.extension} << EOF\n${code}\nEOF`,
            (err, stdout, stderr) => {
                if (err) {
                    console.error(stderr);
                    success = false;
                }
            })
        return success;
    }

    /**
     * 파일 생성 등 초기화 목적의 코드
     * code: 대응되는 파일.
     */
    init(code: string, timeout: number = 3000) {
        let success = this.createCodeFile(code); // 파일 생성 여부 검사
        if (success && this.compile_str) {
            // 컴파일이 필요한 경우에는 컴파일을 진행.
            exec(this.compile_str, { timeout }, (err, stdout, stderr) => {
                if (err) {
                    console.error(stderr);
                    success = false;
                }
            })
        }
        return success;
    }

    /**
     * 주어진 입출력에 대해 실행한 후 해당 내역을 출력하는 코드.
     * @param tc testcase
     * @param timeout 시간 제한
     */
    run(tc: ITestCase, timeout: number = 5000) {
        let success = true;

        exec(`${tc.input && `echo ${tc.input} |`} ${this.run_str}`, { timeout }, (err, stdout, stderr) => {
            if (err) {
                // 나중에 에러 이유 등도 알 수 있도록 할 수 있다면...
                console.error(stderr);
                success = false;
                return;
            }
            //결과 값이 다르다면
            if ((stdout === tc.output) !== tc.type) {
                success = false;
            }
        });
        return success;
    }

    exit() {
        let success = true;

        exec(`rm ${ScoringManager.temp_dir}/${this.id}.${this.extension}; ${this.exit_str}`, (err, stdout, stderr) => {
            if (err) {
                console.error(stderr);
                success = false;
            }
        });
        return success;
    }
}