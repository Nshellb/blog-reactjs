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