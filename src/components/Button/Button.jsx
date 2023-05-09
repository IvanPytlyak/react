import myStyles from "../Button/Button.module.scss";

export const Button = (props) => {
  return (
    <button className={myStyles[props.variants]} onClick={props.randomName}>
      {props.children}
    </button>
  ); // children - = Hello из основного листа (textcontent) / randomName - имя в которую передается функция onClickHandler из App.jsx
};
