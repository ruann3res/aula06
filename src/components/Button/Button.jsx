import ButtonStyles from "./button.module.css";

export const Button = ({ preset = "primary", children }) => {
  return (
    <button className={`${ButtonStyles.container} ${ButtonStyles[preset]}`}>
      {children}
    </button>
  );
};
