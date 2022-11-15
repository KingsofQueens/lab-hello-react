// src/App.js
import "./App.css";
import Header from "./components/Header";
import Icon1 from "./components/Icon1";
import Icon2 from "./components/Icon2";
import Icon3 from "./components/Icon3";
import Icon4 from "./components/Icon4";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <div className="App-info">
          <h1> Say hello to ReactJS </h1>
          <p>
            You will learn how to use the most popular frontend libraty, and
            become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="App-details">
        <Icon1 />
        <Icon2 />
        <Icon3 />
        <Icon4 />
      </div>
    </div>
  );
}
export default App;
