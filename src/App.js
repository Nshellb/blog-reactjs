import './App.css';
import logo from './logo.svg';

function App() {

  let posts = "강남 고기 맛집";
  let cus_style = { color : 'blue', fontSize : '30px' }; // JSX Style 응용

  function out100() {
    return 100
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color : 'blue', fontSize : '30px' } }>개발 Blog</div>
      </div>
      <img src={ logo } style={ { height : 100 } } />
      <h4> { posts } </h4>
      <h4 style={ cus_style }> { posts } </h4>
      <h4> { out100() } </h4>
    </div>
  );
}

export default App;
