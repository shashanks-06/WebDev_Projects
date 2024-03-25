import styles from "./Button.module.css";

const Button = ({ text, icon, isOutline, ...rest }) => {
  //Props = text, icon, isOutline
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
