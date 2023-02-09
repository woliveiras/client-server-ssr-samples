type ButtonProps = {
  children?: JSX.Element | JSX.Element[] | string;
};
const Button = ({ children }: ButtonProps) => {
  return <button role="button">{children}</button>;
};

export default Button;
