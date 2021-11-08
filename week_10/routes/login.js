
import express from "express"; //router 함수 사용하기 위해
import { selectSql } from "../database/sql"; //insertSql 모듈 가져옴

const router = express.Router();

// localhost:3000 주소로 접속
router.get('/', (req, res) => {
    res.render('login'); // home.hbs 파일을 참조
});

// 로그인 버튼 눌렀을 경우 동작
router.post('/', async (req, res) => {                        
    const vars = req.body;   //입력 데이터 저장
    const users = await selectSql.getUsers();
    let whoAmI = ''                 //admin인지 user인지 확인하기 위해
    let checkLogin = false;         //로그인이 되었는지 확인하기 위해

    //유저 데이터 확인
    users.map((user)=>{
        if(vars.id === user.Id && vars.password === user.Password){ // 로그인에 성공한 경우
            checkLogin = true;
            if(vars.id === 'admin'){       // admin인 경우
                whoAmI = 'admin';
            } else {                        // user인 경우
                whoAmI = 'users';
            }
        }
    })

    console.log('whoAmI: ', whoAmI);


    if(checkLogin && whoAmI === 'admin'){           // admin인 경우
        res.redirect('/delete');                    // delete 페이지로
    }else if(checkLogin && whoAmI === 'users'){     // user인 경우
        res.redirect('/select');                    // select 페이지로
    }else{
        res.send("<script>alert('로그인에 실패했습니다.')</script>");   // 알림창 띄우기
    }

})

module.exports = router;