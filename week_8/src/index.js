import express from "express";
import logger from "morgan";
import path from "path";

import homeRouter from "../routes/home";        //home.js파일 참조
import updateRouter from "../routes/update";    //update.js파일 참조
import selectRouter from "../routes/select";    //select.js파일 참조

//포트
const PORT = 3000;    
//express 기능 사용
const app = express();          

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', homeRouter);
app.use('/update', updateRouter);
app.use('/select', selectRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})