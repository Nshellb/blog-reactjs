import React, { useState } from 'react';
import './App.css';

function App() {

  let [title, title_modify] = useState(['맛있는 떡볶이', '35년 전통 국수', 'Vue.js vs React']);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { title[0] } </h3>
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
