// 아래 내용은 day01ex02.html의 <script></script>안의 내용을 옮겨서 test.js 

// id 속성이 clickBtn인 요소의 DOM 셀렉트
var clickBtn = document.getElementById("clickBtn");
// id 값이 같은 요소는 1개 뿐이다.
// 여러개 하고 싶으면 class 사용
var heading = document.getElementById("heading");
var aa = document.getElementsByClassName("aa");
// s가 붙어있는 거는 여러개 즉, class일 때
// DOM 선택 되었는가?
console.log(clickBtn);
console.dir(clickBtn);
// 선택된 DOM 요소에 이벤트 핸들러 걸기
clickBtn.onclick = function(event) {
    // 아래 기능은 버튼이 눌리면 작동하는 기능 즉 클릭 함수
    // 클릭이벤트가 발생하면 이벤트를 console에 출력한다
    // console.dir(event);
    console.dir(document);
    // document 중 title, bgcolor 변경해보자
    document.background = "yellow";
    document.title = "Hello";
    console.log(heading);
    heading.style.backgroundColor = "red"
    // 괄호를 붙히면 함수, 괄호 없으면 속성이다
}

// 문서의 거의 모든 요소가 객체가 될 수 있다
// 함수를 변수에 참조 시킨다
// 함수를 배열에도 담을 수 있다
// 함수를 다른 함수의 인자로 사용 (callback 함수)