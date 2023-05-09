import { useState } from "react";
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";
import { Notification } from "../Notification/Notification";
export const InputCheck = (props) => {
  //
  const changeNumber = (event) => {
    props.setMyNumberIC(event.target.value);
  }; // получение value инпута?

  return (
    <form onSubmit={props.submitNumber}>
      <InputText
        placeholder="Enter the number"
        onChangeHandler={changeNumber} // что это?
      ></InputText>
      <Button type="submit">Send</Button>
    </form>
  );
};
