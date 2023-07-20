# codeSolverOnline
![codesolveronline main image](./docs/cso_logo.png)

## 설명
codeSolverOnline은 현재 존재하는 온라인 문제은행 시스템에 대해 분석하고, 추론을 통해 유사하게 동작하는 채점 시스템을 구현한 프로젝트입니다. 구현된 시스템은 [BOJ](https://www.acmicpc.net/)과 유사하게 입출력 기반으로 채점을 진행합니다.

자세한 설명은 [최종보고서](https://github.com/blaxsior/codesolveronline/blob/master/docs/%EC%B5%9C%EC%A2%85%EB%B3%B4%EA%B3%A0%EC%84%9C.pdf)를 참고하세요.

## 주의점
현재 프로젝트에서는 cat 명령으로 파일을 생성합니다. 이때 이 방식은 linux 환경에서만 동작하는 것으로 파악되어, 현재 다른 환경에서는 실행하는 경우 에러가 발생할 수 있습니다.  
실행 전 gcc, node, python3가 로컬에 설치되어 있는지 확인하세요. 만약 존재하더라도 해당 이름으로 인식할 수 없다면 실행되지 않을 수 있습니다. 이 경우 로컬 환경에 맞게 설정을 변경하세요.
## 실행 방법
1. 파일 다운로드
```
  # 프론트엔드
  cd frontend
  yarn install
  cd ..

  # 백엔드
  cd backend
  yarn install

  # 파일 생성. 파일 생성 후 DATABASE_URL="file./dev.db" 입력. 또는 아래 코드 실행
  cat > .env << EOF
  DATABASE_URL="file./dev.db"
  EOF

  yarn prisma generate # prisma 쿼리 빌더 생성(필수) 
```
2. 실행
```
# 프론트엔드 실행: 터미널 1
cd frontend && yarn start
# 백엔드 실행: 터미널 2
cd backend && yarn run dev
```