
import express from "express"; //router 함수 사용하기 위해
import { insertSql } from "../database/sql"; //insertSql 모듈 가져옴

const router = express.Router();

// localhost:3000 주소로 접속
router.get('/', (req, res) => {
    res.render('home'); // home.hbs 파일을 참조
});

// 삽입 버튼 눌렀을 경우 동작
router.post('/', (req, res) => {                        
    const vars = req.body;   //입력 데이터 저장
    const var_lenth = Object.keys(req.body).length; //employee와 department 구분 위해 사용 
    //웹이서 넘어오는 데이터 길이 확인

    //employee와 department 구분하기 위해 if문 사용
    if(var_lenth > 4){          //Employee 테이블
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };
        //insertSlq에서 만든 setEmployee 함수 사용
        insertSql.setEmployee(data);
    }else {                 //Department 테이블
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };
        //insertSql에서 만든 setDepartment 함수 사용
        insertSql.setDepartment(data);
    }
    // 입력 후 홈화면으로 가기 위함 (새로고침)
    res.redirect('/');
})

module.exports = router;