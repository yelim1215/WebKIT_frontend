import { useState } from "react";
import Car from "./app_ex01/Car";
import Hello from "./app_ex01/Hello";

function App() {
  // state 선언
  const [brand, setBrand] = useState("KIA");
  const [carName, setCarName] = useState("K7");
  const [user, setUser] = useState("길동");

  function _changeName(newName) {
    console.log("changeName() 호출!");
    setUser(newName);
  }

  function assignTest() {
    console.log("assignTest() 호출");
    const target = {a:1, b:2};
    const source = {b:4, c:5};

    const returnedTarget = Object.assign(target, source);
    console.log(target);
    console.log(returnedTarget);
    console.log(target === returnedTarget);
  }

  function assignTest2() {
    console.log("assignTest2() 호출");
    const target = {a:1, b:2};
    const source = [
      {b:1, c:5},
      {b:6, c:7, d:8},
      {b:9, c:10, d:11},
      {b:12, c:13, d:14, e:15},
    ];

    Object.assign(target, source);

    console.log(target);
  }

  function testSpread(){
    console.log("testSpread() 호출 ...");
    const arr = [{name:"kim"},{name:"lee"},{name:"park"}];
    
    const newArr = [...arr, {name:"kang"}];
    console.log(arr); // 1,2,3,4
    console.log(newArr); // 1,2,3,4,5 (기존 + 새로)
  }

  return (
    <div>
      {/* 컴포넌트 생성 */}
      <Car brand={brand} name={carName}></Car>
      <hr />
      <Hello name={user} address="Seoul" changeName={_changeName}></Hello>
      <hr />
      <button onClick={(event)=>{
        assignTest();
      }}>assign 테스트</button>
      <hr />
      <button onClick={assignTest2}>assign 테스트 2</button>
      <button onClick={testSpread}>spread 테스트</button>
    </div>
  );
}

export default AppEx01;