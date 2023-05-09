import { useState } from "react";
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";

export const InputCheck = (props) => {
  //
  const changeNumber = (event) => {
    props.setMyNumberIC(event.target.value);
  };

  return (
    <form onSubmit={props.submitNumber}>
      <InputText
        placeholder="Enter the number"
        onChangeHandler={changeNumber}
      ></InputText>
      <Button type="submit">Send</Button>
    </form>
  );
};
