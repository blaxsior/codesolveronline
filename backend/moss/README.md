# moss

moss는 스탠포드 대학에서 만든 소프트웨어 유사성 감지 시스템이다.  
사용자는 moss을 이용하여 자신이 가진 코드의 유사성을 비교할 수 있다.

## 사용법

1. google 등의 계정을 이용하여 moss에 계정 생성 메일을 보낸다.
    - 받는 사람: moss@moss.stanford.edu
    - 메일 제목: (제목 없음) # 메일 제목 자체를 비우고 보내야 한다.
    - 메일 본문
        ```
        registeruser
        username@domain
        ```
        username 부분은 자신이 사용하는 메일 주소를 넣는다.  
        'username1234@gmail.com' 처럼 자신의 주소를 작성하면 된다.
2. 대략 10분 이내에 moss로부터 메일이 온다. 해당 메일 내에 있는 설명을 따른다.  
    1. ---cut here--- 부분 아래의 코드를 복사하여, 로컬 파일 moss.pl에 복사한다.
    2. ```chmod ug+x moss``` 명령을 입력하여 사용 권한을 부여한다.
    3. 설명을 읽고 사용한다.

### 주의 사항
- 현재 기준 한 계정으로는 하루에 100번까지만 이용할 수 있다.
- $userid는 고유하므로, 외부에 노출시키지 않는다.
