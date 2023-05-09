import { useState } from "react";
// useState - хук
import { AddUserForm } from "../../containers/AddUserForm/AddUserForm";
import { Footer } from "../../containers/Footer/Footer";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";
import { Notification } from "../../components/Notification/Notification";

export const Main = () => {
  const [name, setName] = useState(""); // хук динамичного изменения // useState нужен для хранения состояния, условный интерфейс отображения
  // value = 10 default
  const [age, setAge] = useState("");

  const submitUserHandler = (event) => {
    event.preventDefault();
    console.log("USER:", name, age);
  };

  const [myNumber, setMyNumber] = useState("");
  const enterNumber = (event) => {
    setMyNumber(event.target.value); // почему так?
    event.preventDefault();
  };

  let realNotificationType;
  switch (myNumber) {
    case 1:
      realNotificationType = "error";
      break;
    case 2:
      realNotificationType = "warning";
      break;
    case 3:
      realNotificationType = "info";
      break;
    case 4:
      realNotificationType = "succsess";
      break;
    default:
      realNotificationType = "";
  }

  return (
    <div>
      <h1> Main Page </h1>
      <AddUserForm
        setUserName={setName}
        setUserAge={setAge}
        //  что тут сетиться?  setAge без аргументов!
        // откуда взялся setUserName и на что он влияет 2:03
        submitUser={submitUserHandler}
      />
      <Button variants="buttons">SMALL</Button>
      <Button variants="buttons">MEDIUM</Button>
      <Button variants="buttons">LARGE</Button>

      <form onSubmit={enterNumber}>
        <InputText
          placeholder="Enter the number"
          onChangeHandler={enterNumber}
        ></InputText>
        <Button type="submit">Send</Button>
      </form>
      <Notification notificationType={realNotificationType}></Notification>

      <Footer />
      {/* /* submitUser, submitUserHandler - Рандом name */}
    </div>
  );
};

//  нет понимания пошаговых действий что-за что отвечает, как получать значение инпута (строка 20? если да - она ничего не возвращает), как синтаксически верно изменять класс Notification?
// корректен ли, в принципе, поход подмены вводных данных (Switch case и пр.) либо это делается иначе?
//  из примера, что разбирали на уроке, (строка 14 помимо console.log выдает по два объекта, зачем и почему так происходит?)
