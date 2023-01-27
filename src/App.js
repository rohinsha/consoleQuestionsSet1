import "./styles.css";
import React, { useEffect } from "react";
export function App() {
  useEffect(() => {
    console.log("4444444");
  }, []);
  console.log("11111111"); //1
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Child />
      <Child1 />
    </div>
  );
}

export function Child() {
  //this will print 1
  function x() {
    setTimeout(() => {
      console.log(i + " " + "x function");
    }, 1000);
    var i = 1;
  }
  x();
  //this is will give undefined error
  function xy() {
    console.log(iv + " " + "xyfunction");
    var iv = 1;
  }
  xy();
  useEffect(() => {
    console.log("5555555");
  }, []);
  console.log("2222222222");
  return (
    <React.Fragment>
      <h1>ddfdf</h1>
    </React.Fragment>
  );
}
export function Child1() {
  useEffect(() => {
    console.log("666666666");
  }, []);
  console.log("333333");
  return (
    <React.Fragment>
      <h1>ddfdf</h1>
    </React.Fragment>
  );
}
