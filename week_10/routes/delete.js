import express from "express";      //router 사용 위함
import { selectSql, deleteSql } from "../database/sql";     // 조회, 수정하기 위해 selectSql, updateSql 불러옴

const router = express.Router();

// 기존값 불러오기
router.get('/', async (req, res) => {
    // const department = await selectSql.getDepartment(); //department select문
    const test = await selectSql.getTest();             //test select문
    //test 테이블 출력
    res.render('delete', {
        title: "삭제 기능",
        test
    })
});

// 삭제 버튼을 눌렀을 경우 delete query를 실행하여 조회 페이지로 이동
router.post('/', async(req, res) => {

// 데이터 객체 만들어 delete query 실행
    const data = {
        // data의 number값을 버튼 value로 설정
        name: req.body.deltestBtn,
    };

    await deleteSql.deleteTest(data);

    res.redirect('/delete');        //조회 페이지로 이동
});

module.exports = router;