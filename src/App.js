import React, { useState } from 'react';
import './App.css';

function App() {

  let [title, title_modify] = useState(['맛있는 떡볶이', '35년 전통 국수', 'Vue.js vs React']);
  let [like, like_modify] = useState(0);

  function title_modify_f() {
    // developer coding 
    var newArray = [...title]; // title의 복사본 생성
    newArray[0] = '순대와 떡볶이'; // 수정할 값 변경
    title_modify( newArray );

    // hard coding
    // title_modify( ['순대와 떡볶이', '35년 전통 국수', 'Vue.js vs React'] );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ title_modify_f }>버튼</button>
      <div className="list">
        <h3> { title[0] } <span onClick={ () => { like_modify(like + 1) } }>👍</span> { like } </h3>
        <p>4월 26일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>4월 27일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>4월 28일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
