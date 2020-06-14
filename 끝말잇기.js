//끝말잇기 js 

var Body = document.body;   //DOM객체의 body 노드를 나타냄 

var Word = document.createElement('div');
Word.textContent = "제로초 선생님";
Body.append(Word);  //document.body.append(Word)  ---> body에 붙이는 과정 필요 

var Form = document.createElement('form');  //참조 아니라 Form 변수에 태그를 생성
Body.append(Form);

var InputWindow = document.createElement('input');
Form.append(InputWindow);  //엔터키 입력 위해 body가 아닌 from에 붙여야 함

var Button = document.createElement('button'); 
Button.textContent = '입력';
Form.append(Button);   //엔터키 입력 위해 body가 아닌 from에 붙여야 함

var ResultWindow = document.createElement('div');
Body.append(ResultWindow);

// 버튼 이벤트 - 
Form.addEventListener('submit', function 콜백함수(event) {   //새로고침 현상 막기
    event.preventDefault(); //디폴트 이벤트 제거 

    if(Word.textContent[Word.textContent.length -1] === InputWindow.value[0]) {
        ResultWindow.textContent = '맞음';
        Word.textContent = InputWindow.value;
        InputWindow.value = '';
        InputWindow.focus();

    } else {
        ResultWindow.textContent = '틀림';
        InputWindow.value = '';
        ResultWindow.focus();
    }
});


/*
ㅁ 변수안에 넣는 이유 : 호이스팅 방지
ㄴ 호이스팅이란? 
자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 
모두 모아서 유효 범위의 최상단에 선언한다.

자바스크립트 Parser가 함수 실행 전 해당 함수를 한 번 훑는다.
https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html

ㅁ window = 브라우저
ㅁ document = 페이지(탭)
ㅁ DOM : 브라우저 렌더링 엔진은, 웹문서를 파싱하여 메모리에 적재하는데 이를 DOM이라 함
ㄴ 각각 개체를 트리로 구성한 것 

ㅁ submit -> 새로고침 현상 막아야함 (submit 디폴트이벤트 없음 할당)

ㅁconsole.dir(document) : document 디렉토리 전부 볼 수 있음, js객체(오브젝트)
ㄴ html과 js 통역사,  태그묶음 
ㄴ console.log(document.body) 쓰면 태그가 나와버려서 DOM객체 쓰러면 dir사용  

ㅁtextContent : 태그안에 들어가는 문자
ㅁvalue : 넣은 값 
*/