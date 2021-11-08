import mysql from "mysql2"
//데이터베이스와 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'root',
        waitForConnection: true,
        connnectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

//selectSql 구현  export해서 다른 파일에서 사용가능
export const selectSql = {
    getUsers : async () => {
        // user table 조회
        const [rows] = await promisePool.query(`select * from user`);   
        //console.log(rows)
        return rows
    },
    getDepartment : async () => {
        // department table 조회
        const [rows] = await promisePool.query(`select * from department`); 
        //console.log(rows)
        return rows
    },
    //임의로 만든 데이터를 select하는 함수
    getTest : async () => {
        const [rows] = await promisePool.query(`select * from test`);
        return rows
    }
}

//deleteSql 구현 export해서 다른 파일에서 사용가능
export const deleteSql = {
    deleteDepartment : async (data) => {
        console.log(`deleteSql.deleteDepartment : `, data.Dnumber);
        const sql = `delete from department where Dnumber = "${data.Dnumber}"`;
        await promisePool.query(sql);
    },
    deleteTest : async (data) => {
        console.log(`delete from test where name = "${data.name}"`);
        const sql1 = `delete from test where name = "${data.name}"`;
        await promisePool.query(sql1)
    }
}