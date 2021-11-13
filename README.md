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

<br>
<br>

# 3주차 DB 테이블 설명
- 3주차 실습은 임의로 만든 테이블을 웹페이지에 출력하는 실습이다.
- 3주차에 사용된 DB 테이블은 한개이며, 테이블 이름은 user이다.
- user 테이블은 다음과 같이 생겼다.

### User Table
| Field          | Type     | Null | Key | Default | Extra |
|----------------|----------|------|-----|---------|-------|
| student_number | int      | NO   | PRI | NULL    |       |
| name           | char(20) | NO   |     | NULL    |       |
| department     | char(30) | NO   |     | NULL    |       |
| grade          | int      | NO   |     | NULL    |       |
| admission_date | datetime | NO   |     | NULL    |       |
| email          | char(30) | NO   |     | NULL    |       |

- user 테이블은 student_number, name, department, grade, admission_date, email 항목이 있다.
- PK는 student_number이다. 

<br>
<br>

# 8주차 DB 테이블 설명
- 8주차 실습은 웹페이지에서 테이블에 값들을 insert, update 해보는 실습이다.
- 8주차 실습에서 사용된 테이블은 2개이며, 테이블 이름은 각각 Department, Employee이다.

### Department Table
| Field          | Type        | Null | Key | Default | Extra |
|----------------|-------------|------|-----|---------|-------|
| Dname          | varchar(15) | NO   | UNI | NULL    |       |
| Dnumber        | int         | NO   | PRI | NULL    |       |
| Mgr_ssn        | char(9)     | NO   | MUL | NULL    |       |
| Mgr_start_date | date        | YES  |     | NULL    |       |

### Employee Table
| Field     | Type         | Null | Key | Default | Extra |
|-----------|--------------|------|-----|---------|-------|
| Fname     | varchar(10)  | NO   |     | NULL    |       |
| Minit     | char(1)      | YES  |     | NULL    |       |
| Lname     | varchar(20)  | NO   |     | NULL    |       |
| Ssn       | char(9)      | NO   | PRI | NULL    |       |
| Bdate     | date         | YES  |     | NULL    |       |
| Address   | varchar(30)  | YES  |     | NULL    |       |
| Sex       | char(1)      | YES  |     | NULL    |       |
| Salary    | decimal(5,0) | YES  |     | NULL    |       |
| Super_ssn | char(9)      | YES  |     | NULL    |       |
| Dno       | int          | NO   |     | NULL    |       |

- 두 테이블의 정보는 위와 같다.
- Department table의 Mgr_ssn은 Employee table의 Ssn을 참조하고 있다.
- Employee 테이블의 Dno는 Department table의 Dnumber를 참조하고 있어야 하지만 이러면 서로를 참조하고 있기 때문에 insert를 수행할 수 없는 문제가 발생한다. 그래서 Employee 테이블의 Dno가 Department table의 Dnumber를 바라보는 참조는 설정되어 있지 않은 상태이다.

<br>
<br>

# 10주차 DB 테이블 설명
- 10주차 실습은 웹페이지 로그인하여 user와 admin을 구분해 routing해주고 admin은 테이블의 항목을 삭제할 수 있도록 해보는 실습이다.
- 10주차 실습에서 사용된 테이블은 3개이며, 테이블 이름은 각각 Department, test, user이다.
- test 테이블은 주어진 테이블이 아닌 임의로 만든 테이블이다.

### Department Table
| Field   | Type        | Null | Key | Default | Extra |
|---------|-------------|------|-----|---------|-------|
| Dname   | varchar(15) | NO   | UNI | NULL    |       |
| Dnumber | int         | NO   | PRI | NULL    |       |

### test Table
| Field  | Type        | Null | Key | Default | Extra |
|--------|-------------|------|-----|---------|-------|
| name   | varchar(30) | YES  |     | NULL    |       |
| number | int         | NO   | PRI | NULL    |       |

### user Table
| Field    | Type        | Null | Key | Default | Extra |
|----------|-------------|------|-----|---------|-------|
| Id       | varchar(20) | NO   | PRI | NULL    |       |
| Password | varchar(20) | NO   |     | NULL    |       |
| Role     | varchar(5)  | NO   |     | NULL    |       |

- 각각 테이블의 정보는 위와 같다.
- test 테이블은 임의로 만들어 준 테이블로 field의 이름과 타입은 임의로 설정한 것이다.
- user 테이블은 로그인 페이지에서 받은 값을 토대로 id, password를 확인하고 admin인지 user인지를 확인하는데 사용하는 테이블이다.
