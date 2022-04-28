ReactJS 

ReactJS 강의 참고
https://www.youtube.com/watch?v=LclObYwGj90&list=PLfLgtT94nNq1e6tr4sm2eH6ZZC2jcqGOy&index=1

React 등장 배경
https://react.vlpt.us/basic/01-concept.html

JSX 설명 - React 공식문서
https://ko.reactjs.org/docs/introducing-jsx.html

React Extension (VSCode, Chrome)
https://sddev.tistory.com/187



React 기초 1강 : 리액트 설치와 셋팅법 (2021+ 스타일)

0) React란? (wikipedia.org 참고)
리액트(React, React.js 또는 ReactJS)는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다.

싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있다.

대규모 또는 복잡한 리액트 애플리케이션 개발에는 보통 라우팅, API통신 등의 기능이 요구되는데 리액트에는 기본적으로 제공되지 않기 때문에 추가 라이브러리를 사용해야 한다.


1) Node.js 설치
홈페이지 접속하여 LTS 버전 설치
create-react-app이라는 라이브러리 설치하기 위함. (npm 설치)


2) ReactJS 프로젝트 생성
> npx create-react-app [프로젝트명]
[프로젝트명]을 가진 React.js 하위 디렉토리가 생성된다.


3) ReactJS 내부 파일 설명
/src/App.js : Main page; index.html과 유사
main page에 들어갈 html을 짜는 공간.

실제 main page는 /public/index.html에 있다.
/public/index.html의 <div id="root"></div>에 App.js의 html 코드가 적용된다.

/src/index.js 에서 App.js 에 작성된 코드가 index.html 에서 동작하도록 하는 코드가 작성된다.
document.getElementById('root') : root라는 id 공간에 App.js의 코드를 넣어라.

/node_modules : 라이브러리가 모두 저장되는 공간.

/public : static 파일 보관함. (이미지, favicon...)

/src : 실제 ReactJS 작성 소스코드 저장 공간.

package.json : 설치한 라이브러리 목록이 정의되는 공간.


4) ReactJS 구동
생성한 ReactJS 프로젝트 디렉토리에서 ReactJS 로컬 구동
> npm start

App.js의 p태그를 수정하고 저장하면 자동으로 반영되는것을 확인할 수 있다.





React 기초 2강 : 리액트에선 HTML대신 JSX 써야함 (JSX 사용법)

1) JSX 설명
App.js의 <div className="App"></div> 내부코드를 정리(삭제)한다.

이제 <div className="App"></div> 공간 내부에 JSX로 작성하면 된다.

JSX : JavaScript를 확장한 문법입니다. UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용할 것을 권장합니다. 
(HTML과 유사한 JS 확장과 유사.)


2) Header(nav) 작성
jsx로 class 몀을 주기위해서는 기존 HTML에서의 class="클래스명" 대신에
className="클래스명"을 사용해야 한다.

App.js에 black-nav jsx를 작성하고 App.css에 css 속성을 작성한다.


3) React에서의 Data Binding (데이터 바인딩)
기존의 단순히 HTML + JS를 사용할때와는 달리
[document.getElementById().innerHTML = ''?]

문자열이 들어갈곳에 중괄호 {}내부에 변수명을 입력하는것으로 사용.
let posts = '오늘 발표자'

<h4>{ posts }</h4>

오늘 발표자 라는 텍스트가 h4 태그 속성을 받고 출력되며 
이는 posts라는 변수의 값이 다른 텍스트로 바뀌면 텍스트만 바뀐채로 
h4 태그 속성을 받아서 출력이 된다. (이게 바인딩이다.)

변수대신 함수명()을 넣어서도 가능하며 함수 실행결과가 반영된다.
이미지 또한 import하여 가져와서 img src="{ import명 }"으로 작성 가능하다.

정리하면 중괄호 {}를 통해서 변수를 집어넣어 편리하게 바인딩이 가능하다.


4) JSX로 Style 속성 부여하기
CSS 문법의 경우 JS에서 충돌날수 있는 기호를 많이 포함하고 있기 때문에
style={ object 자료형으로 만든 style } 형식으로 작성한다.
(object 자료형이란 key : 'value' 쌍으로 이루어진 형태의 자료형이다.)

font-size 속성과 같이 '-' 기호가 포함된 속성명의 경우
camelCase 작명관습에 따라 속성명을 변경하여 작성해야 한다.
font-size -> fontSize





React 기초 3강 : 리액트에선 변수말고 state 만들어 쓰랬죠 (useState)

1) list 작성
App.js에 lsit class를 작성하고 App.css에 list CSS 속성을 작성한다.

2) State
React에서 데이터를 저장했다가 바인딩하는 두 가지 방법이 있다.
변수에 넣는다 OR state에 넣는다.

여기서는 블로그 포스팅 제목을 바인딩하기위해 state를 사용하였다.


state 사용을 위해서 App.js에 state 사용을 위한 구문을 추가한다.
import React, { useState } from 'react';
// React 안에 있는 내장함수(여기서는 useState)를 사용하겠다.
-> State는 변수대신 쓰는 데이터 저장공간이며
 / useState()를 이용해서 만들어야하고
 / 문자, 숫자, array, object 모든 형식을 저장할 수 있다.


useState('data1'); 와 같이 사용한다.
이때 데이터가 2개 들어간 array가 생기는데 
[a, b] -> a: 'data1', b: data1라는 데이터를 변경하기 위한 함수가 들어간다.
-> useState('data1'); = [state 데이터, state 데이터 변경 함수]


* ES6 destructuring 문법
array, object에 있던 자료를 변수에 쉽게 담고 싶을때 사용한다.
var [a, b] = [10, 100]; // 양변의 형식 통일이 필요
10이라는 값은 a에, 100이라는 값은 b에 담아주세요~
-> var a = 10; var b = 100;과 같다.


3) State에 데이터를 저장하는 이유
state는 변경되면 HTML이 자동으로 재랜더링이 된다.
-> HTML을 새로고침 하지않아도 데이터가 자연스럽게 변경이 된다.

자주 바뀌거나 중요한 데이터는 변수 대신 state로 저장해서 사용하자!





React 기초 4강 : 리액트에서 버튼에 이벤트 리스너 (핸들러) 장착하는 법

1) React에서의 클릭이벤트
App.js에서 좋아요 버튼 역할을 위해 span 태그로 감싼 이모티콘을 넣고 count 숫자를 넣는다.
span 태그에 onClick 속성을 부여하여 클릭할때 JS를 실행하도록 한다.
(수식 등 불가. onClick={함수()} 형태를 가진다. onClick={ ()=>{실행할 내용} }와 같이 Callback 함수를 사용해도 된다.)


* ES6 함수 문법 
function 대신에 '=>'를 사용할 수 있다. (+ 함수 내부 문법이 조금 바뀐다.)
addEventListener('click', function() {
    ~
})
addEventListener('click', ()=>{
    ~
})


2) 클릭시마다 숫자 증가 시키기 구현
증가해야할 숫자를 state로 선언
클릭시마다 state에 저장된 값을 1씩 증가

state는 state 변수에 +1과 같은 수식연산이 바로 이루어지지 않게 되어있다.
state 선언시 생성되는 배열의 두번째 값인 state 변경 함수를 통해 조작한다.
state변경함수(대체할 데이터); 와 같이 사용한다.
-> state로 선언된 값은 state 선언시 생성되는 state 변경 함수를 통해서만 조작이 가능하다.
 / state 변경함수로 값을 변경해야 부드럽게 재랜더링된다.





React 기초 5강 : state 맘대로 변경하는 법 (setState는 넘 옛날이고염)
1) state로 선언한 배열의 값 하나만 변경하는 방법
단일값 하나만 지정해서 (array[0] = 1) 변경이 불가능하다.
state 변경함수는 기존 state값을 덮어쓰기 하듯 바꿔버리기 때문이다.

바꿀 state 배열값을 임시 배열에 복사하고
수정할 작업을 임시배열에서 수행한뒤
임시배열로 state 배열값을 state 변경함수로 덮어버린다.


* onClick={ 함수() } : 클릭없이 함수가 바로 실행됨.
-> onClick={ 함수 } : 클릭해야 함수가 실행됨.


2) 값을 복사할때 주의할점
var newArray = title; 와 같이 값을 복사하는 경우 
복사가 아닌 state로 선언된 title 값이 공유가 된다. (Call-by-Reference)
( title은 state로 선언된 변수, 당연히 값이 바뀌지 않을것이다. )

var newArray = [...title]; 와 같이 별개의 복사본으로 복사해야 한다.
(Call-by-Value) 값을 공유하지 않는 독립된 값을 가지는 복사, Deep copy라고 표현한다.


* React 대 원칙 : immutable data; 리액트상에서의 모든 데이터는 직접 수정이 되면 안된다.


3) Array, Object state 데이터 수정 방법
변경함수를 사용해야한다.
변경함수( 대체할 데이터 ); 의 형태를 가진다.
state 값은 직접 변경이 불가능하며 [...state변수명]과 같이 Deep copy하여 
복사본에서 데이터 변경을 수행하고 이를 대체할 데이터로 덮어쓰기한다.