import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";

export const AddUserForm = (props) => {
  const changeName = (event) => {
    props.setUserName(event.target.value);
  };

  const changeAge = (event) => {
    props.setUserAge(event.target.value);
  };

  return (
    // onSubmit - обработчик клика
    <form onSubmit={props.submitUser}>
      <InputText placeholder="Name" onChangeHandler={changeName} />
      <InputText placeholder="Age" onChangeHandler={changeAge} />
      {/*  onChangeHandler - что это такое?*/}
      <Button type="submit">Submit</Button>
    </form>
  ); // почему тут не могу добавить еще одну кнопку, только если в форму?
};
