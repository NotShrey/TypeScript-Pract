import "./App.css";

function App() {
  return (
    <>
      <Todo title="i am learning ts" desc="yo yo" done={true} />
    </>
  );
}

interface TodoProp {
  title: string;
  desc: string;
  done: boolean;
}

function Todo(prop: TodoProp) {
  return (
    <>
      <h1>{prop.title}</h1>
      <h2>{prop.desc}</h2>
      <h3>{"this is working"}</h3>
    </>
  );
}

export default App;
