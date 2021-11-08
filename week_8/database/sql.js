import mysql from "mysql2"
//데이터베이스와 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'root',
        waitForConnection: true,
        connnectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

//selectSql 구현  export해서 다른 파일에서 사용가능
export const selectSql = {
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);   // employee table 조회
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`); // department table 조회
        console.log(rows)
        return rows
    },
}

//insetSql 구현 export해서 다른 파일에서 사용가능
export const insertSql = {
    // data라는 객체 타입의 파라미터에 입력할 정보를 받아 query문 생성
    setEmployee : async (data) => {
        //data에 저장된 변수를 사용하기 위해 `` 사용, 단순 텍스트
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}", 
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;

        await promisePool.query(sql);   //query문 실행
    },
    // employee와 같은 구조
    setDepartment : async (data) => {
        const sql = `insert into department values ( 
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;

        await promisePool.query(sql);  //query문 실행
    },
}

// insert와 동일한 구조, data 받아서 실행하는 구조 export해서 다른 파일에서 사용가능
export const updateSql = {
    updateEmployee : async (data) => {
        const sql = `update employee set salary = "${data.Salary}" where Ssn = "${data.Ssn}"`;

        console.log(sql);

        await promisePool.query(sql);
    },

    updateDepartment : async (data) => {
        const sql = `update department set dname ="${data.Dname}" where Dnumber = 0`;
        await promisePool.query(sql);
    },
}