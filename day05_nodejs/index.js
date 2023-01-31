const express = require('express');
const app = express();

// public 폴더를 외부에서 접속할 수 있도록 static 설정하기
app.use(express.static('public'));

// const : 상수, let : 변수
const carList = [];
let cnt = 1;

app.get('/car/input', function(req, res) {
    // var name = req.query.name;
    // var price = req.query.price;
    // var company = req.query.company;
    // var year = req.query.year;

    // console.log(name, price, company, year);

    // res.end(`${name}, ${price}, ${company}, ${year}`);

    // console.log(req.query);
    // res.send(req.query);
    // res.end() : 문자열 return
    // res.send() : 객체 return

    req.query.no = cnt++;
    carList.push(req.query);

    res.send(carList);
});

app.listen(3000, function() {
    console.log("노드js 서버 실행 중 : 3000");
});