import { StyledButton } from "./index.styled";

interface ButtonInterface {
  variant?: "text" | "outlined" | "contained" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  title?: string;
}

const Button = ({ variant, color, title }: ButtonInterface) => {
  return (
    <StyledButton variant={variant} color={color}>
      {title}
    </StyledButton>
  );
};

export default Button;
