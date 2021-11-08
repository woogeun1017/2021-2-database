# 2021-2-database

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
     - (SSH 설정한 경우) git clone git@github.com/woogeun1017/2021-2-database.git
     - (token을 사용하는 경우) git clone https://github.com/woogeun1017/2021-2-database.git
2. week_3 폴더로 이동
     > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
     > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',  
        user: 'root', // 본인의 myslq user id
        database: 'databasename', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnection: true,
        connnectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

<br>

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111|
이순신|인공지능학과|인공지능|12181111|

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.