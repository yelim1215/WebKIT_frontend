const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
// npm i -S formidable
const formidable = require('formidable');
const fs = require("fs");

// app.set("key", "value")  - setAttribute 용도로 사용
// app.get("key");  - getAttribute의 용도로 사용
// app.get("path", 콜백함수)  - 서버의 doGet 역할
// app.post("path", 콜백함수)  - 서버의 doPost 역할
app.set("port", 3000);

app.set("view engine", "ejs");
app.set("views", __dirname + "/template");

app.use(cors());
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
    res.write("<h1>Hello world</h1>");
    res.end();
});


app.post("/saram/input", (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(">>>>>> (1) ");
        res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
        res.write("<h2>upload file received!</h2>");
        res.end();
    });
    form.on("end", function() {
        console.log(">>>>>> (2) "); // _2
        console.log("파일 개수 : ", this.openedFiles.length);
        // openedFiles s가 붙어있다는건 여러개
        // 하나일 때는 photo로 접근
        for (var i = 0; i < this.openedFiles.length; i++) {
            let file = this.openedFiles[i];
            // console.dir(file);
            var oldpath = file.filepath;
            var newpath = 'C:/Users/qowls/Downloads/upload/' + file.originalFilename;
            // rename을 이용해서 파일을 옮긴다
            // 그 다음 callback 함수 실행되고 완료문
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                // 위에서 res.write랑 res.end 둘 다 했으니 여기서는 안함
                // res.write('File uploaded and moved!');
                // res.end();

                res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"}); // _2
                res.write("<h2>upload file received!</h2>"); // _2
                res.end(); // _2
            });            
        }
    });
});

// http와 express의 결합 - 같은 port를 공유한다.
const server = http.createServer(app);
server.listen(app.get("port"), ()=>{
    console.log("서버 실행 중 - http://localhost:"+ app.get("port") );
});