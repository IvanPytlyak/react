import { Button } from "./components/Button/Button";
import { InputText } from "./components/InputText/InputText";
import { Main } from "./pages/Main/Main";

function App() {
  // const sayHello = () => {
  //   console.log("Hello ");
  // };
  // const sayWorld = () => {
  //   console.log(" World!");
  // };

  // const changeValue = (event) => {
  //   console.log(event.target.value);
  // };

  // return (
  //   <div className="App">
  //     <Button randomName={sayHello}>Hello</Button>
  //     <Button randomName={sayWorld}>World</Button>
  //     <InputText placeholder="Name" onChangeHandler={changeValue} />
  //     Hello World!
  //   </div>
  // );
  return <Main />;
}

export default App;
