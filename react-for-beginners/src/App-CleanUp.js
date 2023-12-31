import { useState, useEffect } from "react";

function Hello(){
  // const byeFn = ()=> console.log("bye;(");
  // const hiFn = () => {
  //   console.log("created:)")
  //   return byeFn;
  // };
  // useEffect(hiFn,[]);

  useEffect(()=>{
    console.log("hi:)")
    return () => console.log("bye:(");
  },[]);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
