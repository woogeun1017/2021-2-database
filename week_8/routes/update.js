import express from "express";      //router 사용 위함
import { selectSql, updateSql } from "../database/sql";     // 조회, 수정하기 위해 selectSql, updateSql 불러옴

const router = express.Router();

// localhose:3000/update/employee 주소로 접속
router.get('/employee', async (req, res) => {  
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {
        title: "직원 테이블 갱신",
        emp_res
    });
});

// localhose:3000/update/department 주소로 접속
router.get('/department', async (req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    })
});

// 수정 버튼을 눌렀을 경우 update query를 실행하여 조회 페이지로 이동
router.post('/employee', async(req, res) => {
    const vars = req.body;
// 데이터 객체 만들어 update query 실행
    //console.log(vars);     //vars 의 데이터 확인용
    const data = {
        Salary: vars.Salary,
        Ssn: vars.Ssn
    }

    await updateSql.updateEmployee(data);

    res.redirect('/select');        //조회 페이지로 이동
});

// 수정 버튼을 눌렀을 경우 update query를 실행하여 조회 페이지로 이동
router.post('/department', async (req, res) => {
    const vars = req.body;
    //console.log(vars.dname);

    // 데이터 객체 만들어 update query 실행
    const data = {
        Dname: vars.dname
    }
    await updateSql.updateDepartment(date);

    res.redirect('/select');        //조회 페이지로 이동
});

module.exports = router;