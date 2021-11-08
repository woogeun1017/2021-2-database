import express from "express";                  //router 사용 위함
import { selectSql } from "../database/sql";    //selectSql 가져옴

const router = express.Router();

// localhost:3000/select 주소로 접속
router.get('/', async function(req, res){   // /는 /select를 의미함
    const department = await selectSql.getDepartment();

    res.render('select', {          //select.hbs 불러와서 다음 데이터 넘겨줌
        title: 'IT 공대',
        department
    });
});

module.exports = router;