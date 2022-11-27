import { exec } from "child_process";
import { randomBytes } from "crypto";

// class CodeScore {
//     type: string;

//     constructor(type: string) {
//         this.type = type;
//     }
// }

const scoringClang = (input: string) => {
    const correction: boolean[] = [];
    let id = randomBytes(12).toString('hex');  
    // random byte 생성하여 input 입력하기.
    // 동일 시간대에 채점하는 사람들 사이에 중복 발생하지 않도록.
    // 뒤에 숫자 붙여서 각 파일 

    // gcc로 생성한 후 input 넣어서 코드 생성하고, 실행, 결과 반환.
    exec(`gcc -o test test.c && echo ${input} | ./test ; rm test test.c`,(err,stdout,stderr) => {
        if(err)
        {
            // 에러면 따로 처리 X

        }
        else {
            console.log(stdout);
        }
    });
};