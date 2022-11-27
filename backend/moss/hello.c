#include <stdio.h>

int main() {
    int temp;
    int result = 0;
    for(int i = 0; i < 10; i++) {
        scanf("%d", &temp);
        result += temp;
    }

    printf("%d", result);
}

//gcc -o test hello.c
//cat hello.txt | ./test
// 이거 실행한 후 출력하면 됨!