// 구조분해 할당 - 객체나 리스트의 요소를 바로 끄집에 내어서 사용
function Hello({ name, address, changeName }) {
    return (
      <h1>
        Hello {name} in {address}
        <br />
        <button
          onClick={function () {
            changeName("철수");
          }}
        >
          이름 바꾸기
        </button>
      </h1>
    );
  }
  
  export default Hello;